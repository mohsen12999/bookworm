import React from "react";

import { useParams } from "react-router-dom";

// TODO: upload image
// TODO: article name, summary and body

const EditBlog = () => {
  const { blog_id } = useParams();
  return <div>Edit Blog page {blog_id}</div>;
};

export default EditBlog;
