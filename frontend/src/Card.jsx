import React from 'react'
import '../src/styles/Card.css'


function Card({shoe}){
    return(
        <div className="card-container" id={shoe.id}>

          <div className="cardimg-container">
                <img src={shoe.imagen} alt ="shoe" className="imagenshoes"/>
          </div>
       
           <div className='cardtext-container'>
              <h1 className='modelo'>{shoe.modelo}</h1>
             <h2 className='marca'>{shoe.marca}</h2>
             <p className='precio'>{shoe.precio}</p>
             <p className='talle'>{shoe.talle}</p>
            
           </div>
          
        </div>
    )
}

export default Card