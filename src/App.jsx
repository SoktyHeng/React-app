import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  function handlePrice(e){
    let p = e.target.value;
    setPrice(p);
  }

  function handleDiscount(e){
    let d = e.target.value;
    setDiscount(d);
  }

  const finalPrice = price - discount;
  const finalVat = (finalPrice * 0.07).toFixed(1);

  return (
    <>
      <div className='input-group'>
        <h2 style={{paddingRight: '45px'}}>Price</h2>
        <input type="number" onChange={handlePrice} style={{fontSize: '18pt'}} placeholder='Price' />
      </div>
      <br />
      <div className='input-group'>
        <h2>Discount</h2>
        <input type="number" onChange={handleDiscount} style={{fontSize: '18pt'}} placeholder='Discount'/>
      </div>
      <p>Gross Price= {finalPrice}</p>
      <p>VAT= {finalVat}</p>
    </>
  )
}

export default App
