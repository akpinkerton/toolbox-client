import { useState, useEffect } from 'react';
import edit from '../img/edit.png'

export default function EditButton() {
  const [showList, setShowList] = useState(false);

  const toggleList = (e) => {
    setShowList(!showList)
  }




  return (<>

    <img className="edit-btn" alt='' src={edit} />



  </>);
}

// import DeleteButton from '../../assets/objects/DeleteButton'
// <div onClick={(() => deleteItem(list.id))}><DeleteButton/></div>
