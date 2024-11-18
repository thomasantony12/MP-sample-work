import { useState } from 'react'
import Card from '../card/Card';

function List({data}) {
  return (
    <div>
        { data.map(item => 
        <div>
        <input type="checkbox" />
        <Card key={item.id} data={item}/>
        </div>
        )}
    </div>
  )
}

export default List
