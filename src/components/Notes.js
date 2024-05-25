import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
export default function Notes() {
    const context = useContext(noteContext);
    const { notes } = context;
    return (
        <div className='container'>
            <div className="row">
            <h3>YOUR NOTES</h3>                   
                    {notes.map((note) => (                       
                            <NoteItem note={note} />                       
                    ))}
            </div>
        </div>
    )
}
