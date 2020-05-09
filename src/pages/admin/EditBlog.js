import React from "react";

import { useParams } from "react-router-dom";

// TODO: upload image
// TODO: article name, summary and body

const EditBlog = () => {
  const { blog_id } = useParams();
  // if (blog_id) => load blog = not find => back to list or new blog
  return <div>Edit Blog page {blog_id}</div>;
};

export default EditBlog;
