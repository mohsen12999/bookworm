import React from "react";

import { useParams } from "react-router-dom";

// note_id == undefined => new note
// note_id != undefined => load note

const EditNote = () => {
  const { note_id } = useParams();
  console.log("note_id", note_id);
  return <div>Edite Note page {note_id}</div>;
};

export default EditNote;
