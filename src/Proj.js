import React from 'react'
import Css from './index'
import ItemList from './ItemList';


function Proj({items,handleCheck,handleDelete}) {
  return (
    <main>
        {(items.length) ? (
            <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
                 ):(
                <p style={{marginTop:'2rem',textAlign:'center'}}>Your list is Empty</p>
            )
    }
    </main>
  )
}

export default Proj
