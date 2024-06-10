import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://127.0.0.1:5000"
  const notesInitial= [];
  const [notes, setNotes] = useState(notesInitial)
  const [name, setName] = useState("");

  // Get current username
  const getUsername = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in localStorage.");
      return;
    }
    try {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      if (response.status === 401) {
        console.error("Unauthorized: Invalid or expired token.");
        return;
      }

      const json = await response.json();
      setName(json.name);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };
  // Get all Notes
  const getNotes = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found in localStorage.");
      return;
    }
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token // Use the retrieved token variable
          // Or 'Authorization': `Bearer ${token}` if that's what your backend expects
        }
      });
  
      if (response.status === 401) {
        console.error("Unauthorized: Invalid or expired token.");
        return;
      }
  
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
  
 // Add a Note
 const addNote = async (title, description, tag) => {
  // API Call 
  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem('token')
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
        "auth-token": localStorage.getItem('token')
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
        "auth-token": localStorage.getItem('token')
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
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes,name,getUsername }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
