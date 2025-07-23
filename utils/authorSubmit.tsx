"use server";

import { writeClient } from "@/sanity/lib/writeclient";

export async function handleAuthorSubmit(formData: FormData, editId: string) {
	const name = formData.get("name") as string;
	const bio = formData.get("bio") as string;

	// Sanity expects an asset upload for image files

	const doc = {
		_type: "author",
		name,
		bio,
		slug: name?.replaceAll(" ", "-").toLocaleLowerCase(),
	};
	if (editId) {
		await writeClient
			.patch(editId)
			.set({
				name,
				bio,
				slug: name?.replaceAll(" ", "-").toLocaleLowerCase(),
			})
			.commit();

		return true;
	}

	const response = await writeClient.create(doc);

	return response;
}

export async function deleteAuthor(id: string) {
  const response = await writeClient.delete(id);

  return response
}