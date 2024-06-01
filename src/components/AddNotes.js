import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNotes() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleOnclick = (e) => {
    e.preventDefault(); // Prevent default form submission
    addNote(note.title, note.description, note.tag); // Corrected tag argument
    setNote({ title: "", description: "", tag: "" }); // Reset the form after submission
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <h3>ADD YOUR NOTES HERE</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleOnclick}>Add Note</button>
      </form>
    </div>
  );
}
