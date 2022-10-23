import React from 'react'
import Header from '../components/Header'
import './Cart.css'

export default function Cart({carts, addItem, delItem, totalPrice}) {

  return (
    <>
      <Header />
      <main>
      <h1>Cart</h1>
      <div className="cart-box">
        {
          carts.map(item => (
            <div className='item' key={item.id}>
              <div className='left-info'>
                <h4>{item.name}</h4>
                <button onClick={ () => delItem(item.id) }>-</button>
                <button onClick={ () => addItem(item.id) }>+</button>
              </div>
              <div className="price">
                <p>{item.quantity} x {(item.quantity * item.price).toLocaleString()}원</p>
              </div>
            </div>
          ))
        }
        <p className="total-price">Total price: {totalPrice.toLocaleString()}원</p>
      </div>
    </main>
    </>
  )
}
