import React, { FC, useState } from "react";
import { deleteAuthor, handleAuthorSubmit } from "@/utils/authorSubmit";
import { AuthorReponse } from "@/utils/model";

export type FormParams = {
	onsubmit: (name: string, file: File | null, bio: string) => void;
};
interface Props {
	isFormShow: boolean;
	openForm: () => void
    data: AuthorReponse[];
	onDataUpdate: () => void
    closeForm: () => void
}

const AuthorForm: FC<Props> = ({ isFormShow, data, closeForm, openForm,onDataUpdate }) => {
	const [editId, setEditId] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	// Form field states
	const [name, setName] = useState('');
	const [bio, setBio] = useState('');

	const handlerSubmit = async () => {
		setIsLoading(true);
		const formData = new FormData();
		formData.set('name', name);
		formData.set('bio', bio);
		if (editId) {
			formData.set('_id', editId); // send _id if editing
		}
		await handleAuthorSubmit(formData, editId);
		closeForm();
		setIsLoading(false);
		setName('');
		setBio('');
		setEditId('');
        setTimeout(() => {
			onDataUpdate()
		}, 100);
	};

	const deleteItem = async (id:string) => {
		setIsLoading(true)
        await deleteAuthor(id)
        onDataUpdate()

		setIsLoading(false)

	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handlerSubmit();
			}}
			className="w-full  mx-0 mt-6"
			encType="multipart/form-data"
		>
			<table className="table-auto w-full border border-gray-300 text-left">
				<thead className="bg-gray-100">
					<tr>
						<th className="px-4 py-2 border border-gray-300">Name</th>
						<th className="px-4 py-2 border border-gray-300">Bio</th>
						<th className="px-4 py-2 border border-gray-300">Actions</th>
					</tr>
				</thead>
				<tbody>
					{isFormShow && (
						<tr className="bg-white">
							<td className="px-4 py-2 border border-gray-300">
								<input
									type="text"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-full border border-gray-300 rounded px-2 py-1"
								/>
							</td>
							<td className="px-4 py-2 border border-gray-300">
								<textarea
									name="bio"
									id="bio"
									value={bio}
									onChange={(e) => setBio(e.target.value)}
									className="w-full border border-gray-300 rounded px-2 py-1"
									style={{ resize: 'none' }}
								></textarea>
							</td>
							<td className="px-4 py-2 border border-gray-300">
								<div className="flex gap-2">
									<button
										disabled={isLoading}
										type="submit"
										className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
									>
										{isLoading ? 'Loading...' : 'Save'}
									</button>
									<button
										onClick={() => {
											closeForm();
											setName('');
											setBio('');
											setEditId('');
										}}
										type="button"
										className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
									>
										Cancel
									</button>
								</div>
							</td>
						</tr>
					)}

					{data?.map((item) => (
						<tr className="bg-white" key={item._id}>
							<td className="px-4 py-2 border border-gray-300">{item.name}</td>
							<td className="px-4 py-2 border border-gray-300">{item.bio}</td>
							<td className="px-4 py-2 border border-gray-300">
								<div className="flex gap-2">
									<button
										type="button"
										onClick={() => {
											setEditId(item._id);
											setName(item.name);
											setBio(item.bio);
											openForm();
										}}
										className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
									>
										Edit
									</button>
									<button
										type="button"
										onClick={() => {
											setEditId(item._id);
											deleteItem(item._id)
											
										}}
										disabled={isLoading}
										className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
									>
										Delete
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</form>
	);
};


export default AuthorForm;
