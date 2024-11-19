import { useState } from 'react'
import Card from '../card/Card';
import "./List.scss"

function List({data, editHandler, activateTrigger, setDeleteItems}) {
  const handleChange = (e, id) => {
    console.log(id, e.target.checked);
    if(e.target.checked){
      setDeleteItems(prev => [...prev, id])
    } if(!e.target.checked) {
      setDeleteItems((prev) => prev.filter((item) => item !== id));
    }
  }

  return (
    <div className='list'>
        { data.map(item => 
        <div className='container' key={item.id}>
        <input type="checkbox" onChange={(e) => handleChange(e, item.id)}/>
        <Card data={item} activateTrigger={activateTrigger} editHandler={editHandler}/>
        </div>
        )}
    </div>
  )
}

export default List
