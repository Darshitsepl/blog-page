import AuthorWrapper from "@/components/Author/AuthorWrapper";
import { getAllAuthor } from "@/sanity/lib/query/query";
import { writeClient } from "@/sanity/lib/writeclient";
import React from "react";


const Category = async () => {
   const response = await writeClient.fetch(getAllAuthor);

  return <AuthorWrapper data = {response}/>;
};

export default Category;
