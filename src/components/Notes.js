import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNotes from './AddNotes';
export default function Notes() {
    const context = useContext(noteContext);
    const { notes } = context;
    return (
        <>
        <AddNotes/>
        <div className='container'>
            <div className="row">
            <h3>YOUR NOTES</h3>                   
                    {notes.map((note) => (                       
                            <NoteItem key={note._id} note={note} />                       
                    ))}
            </div>
        </div>
    </>
    )
}
