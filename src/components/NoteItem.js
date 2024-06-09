import React,{useContext} from 'react'
import { MdEdit } from "react-icons/md";
import NoteContext from '../context/notes/noteContext';
import { RiDeleteBin6Line } from "react-icons/ri";
export default function NoteItem(props) {
    const context= useContext(NoteContext);
    const {deleteNote}=context;
    const { note, updateNote } = props;
    return (
        <div className=" col-md-3">
            <div className="card m-2">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <p className='card-text'>{note.tag}</p>
                    <button className='btn btn-outline-info m-2'onClick={()=>{updateNote(note)}}><MdEdit /></button>
                    <button className='btn btn-outline-danger m-2'onClick={()=>{deleteNote(note._id);props.showAlert("Note has been deleted!!","danger")}}><RiDeleteBin6Line/></button>
                </div>
            </div>
        </div>
    )
}
