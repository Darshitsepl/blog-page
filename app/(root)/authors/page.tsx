// app/authors/page.tsx

import AuthorWrapper from "@/components/Author/AuthorWrapper";
import { getAllAuthor } from "@/sanity/lib/query/query";
import { writeClient } from "@/sanity/lib/writeclient";

// Enable ISR (optional)
//export const revalidate = 1; // regenerate every 60 seconds

const Authors = async () => {
  const data = await writeClient.fetch(getAllAuthor);
  return <AuthorWrapper data={data} />;
};

export default Authors;
