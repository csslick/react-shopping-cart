import React from 'react'
import Header from '../components/Header'

export default function Cart({carts}) {
  console.log('carts = ', carts);

  return (
    <main>
      <Header />
      <h1>Cart</h1>
      {
        carts.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.quantity}</p>
          </div>
        ))
      }
    </main>
  )
}
