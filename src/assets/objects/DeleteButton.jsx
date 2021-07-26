import React from "react";
import trash from '../img/trash.png'

export default function DeleteButton() {


  return (
    <div > <img className="trash-btn" alt='' src={trash}/> </div>
  );
}

// import DeleteButton from '../../assets/objects/DeleteButton'
// <div onClick={(() => deleteItem(list.id))}><DeleteButton/></div>
