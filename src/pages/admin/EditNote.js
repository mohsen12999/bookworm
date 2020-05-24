import React from "react";

import { useParams } from "react-router-dom";
import { Context } from "../../contexts/Context";

// note_id == undefined => new note
// note_id != undefined => load note

// TODO: upload image
// TODO: book name and summary
// TODO: add, edit, remove chapter

const EditNote = () => {
  const { note_id } = useParams();
  // const [file, setFile] = React.useState(null);

  return (
    <Context.Consumer>
      {(context) => {
        const writtenBook = context.GetWrittenBook(note_id);
        console.log(writtenBook);

        return <form></form>;
      }}
    </Context.Consumer>
  );
};

export default EditNote;
