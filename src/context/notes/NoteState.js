import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://127.0.0.1:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NDVlZGUyMzdmMDc3MjY1ZDFiOGRlIn0sImlhdCI6MTcxNjgwNTM0Mn0.Jd58iAVdoS5OQuL7CnN-KJuO3zNAxPaObOxRIMDv6AA"
      }
    });
    const json = await response.json()
    setNotes(json)
  }
 // Add a Note
 const addNote = async (title, description, tag) => {
  // API Call 
  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NDVlZGUyMzdmMDc3MjY1ZDFiOGRlIn0sImlhdCI6MTcxNjgwNTM0Mn0.Jd58iAVdoS5OQuL7CnN-KJuO3zNAxPaObOxRIMDv6AA"
    },
    body: JSON.stringify({ title, description, tag })
  });

  const note = await response.json();
  setNotes(notes.concat(note));
};

  // Delete note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NDVlZGUyMzdmMDc3MjY1ZDFiOGRlIn0sImlhdCI6MTcxNjgwNTM0Mn0.Jd58iAVdoS5OQuL7CnN-KJuO3zNAxPaObOxRIMDv6AA"
      }
    });
    const newNotes = notes.filter(note => note._id !== id);
    setNotes(newNotes);
    console.log(response);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NDVlZGUyMzdmMDc3MjY1ZDFiOGRlIn0sImlhdCI6MTcxNjgwNTM0Mn0.Jd58iAVdoS5OQuL7CnN-KJuO3zNAxPaObOxRIMDv6AA"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
    console.log(json);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
