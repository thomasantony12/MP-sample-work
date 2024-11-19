import { useState } from 'react'
import Card from '../card/Card';
import "./List.scss"

function List({data}) {
  return (
    <div className='list'>
        { data.map(item => 
        <div className='container' key={item.id}>
        <input type="checkbox" />
        <Card key={item.id} data={item}/>
        </div>
        )}
    </div>
  )
}

export default List
