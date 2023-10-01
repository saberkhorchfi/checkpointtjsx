import React from 'react'
import produit from './Produit'
import './Image.css'
function Image() {
  return (
    <div >
        <img src={produit.image} className='img'></img>
      
    </div>
  )
}

export default Image
