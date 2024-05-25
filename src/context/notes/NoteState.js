import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const initialNotes = [
        {
            _id: "66517c83dfb150390d944dca",
            user: "664df001b8a597592013f6a3",
            title: "Title",
            description: "Don't forget",
            tag: "something",
            date: "2024-05-25T05:52:03.808Z",
            __v: 0
        }
    ];

    const [notes, setNotes] = useState(initialNotes);

    // Add note
    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    // Delete note
    const deleteNote = (id) => {
        const newNotes = notes.filter(note => note._id !== id);
        setNotes(newNotes);
    };

    // Edit note
    const editNote = (id, updatedNote) => {
        const newNotes = notes.map(note =>
            note._id === id ? { ...note, ...updatedNote } : note
        );
        setNotes(newNotes);
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
