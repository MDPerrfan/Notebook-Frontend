import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
    const notesInitial=[
        {
          "_id": "66517c83dfb150390d944dca",
          "user": "664df001b8a597592013f6a3",
          "title": "Title",
          "description": "Don't forget",
          "tag": "something",
          "date": "2024-05-25T05:52:03.808Z",
          "__v": 0
        },
        {
            "_id": "66517c83dfb150390d944dc6",
            "user": "664df001b8a597592013f6a3",
            "title": "Title",
            "description": "Don't forget",
            "tag": "something",
            "date": "2024-05-25T05:52:03.808Z",
            "__v": 0
          }
      ]
      const [notes,setNotes]=useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;