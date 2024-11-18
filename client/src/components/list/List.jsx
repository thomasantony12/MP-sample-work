import { useState } from 'react'
import Card from '../card/Card';

function List({data}) {
  return (
    <div>
        { data.map(item => <Card key={item.id} data={item}/>)}
    </div>
  )
}

export default List
