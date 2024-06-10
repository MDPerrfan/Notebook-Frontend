import React from 'react';
import Notes from './Notes';

export default function Home(props) {
const {showAlert}=props
  return (
    <div className='home'>
      <Notes showAlert={showAlert}/>    
    </div>
  );
}
