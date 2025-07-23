export const getAllAuthor = `*[_type=='author' && slug != null] {
 _id,
 name,
 bio
}`