import './App.css'
import React, { useState } from 'react';
import Product from './components/Product';

function App(){

  const showitems=[
    {
      productImage: './src/assets/televisionimage.jpg',
      productPrice: "N 86,999",
      productName:"itel 32inches Led"
    },
    {
      productImage: './src/assets/televisionimage2.jpg',
      productPrice: "N 86,999",
      productName:"itel 32inches Led"
    },
    {
      productImage: './src/assets/televisionimage3.jpg',
      productPrice: "N 86,999",
      productName:"itel 32inches Led"
    },
    
  ]

  const [state, setState] = useState(false)
  return (
    <>
    <h1>product page</h1>
    <div className='wrap'>
      <ul>{

        showitems.map(
        (object, index)=>{
            return(
              <Product key={index} productImage={object.productImage} productname={object.productName} productprice={object.productPrice} />
            )
         }
        )
        }

      </ul>

    </div>
   
        
      
    </>
  )
}


export default App
