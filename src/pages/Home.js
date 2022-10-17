import React from 'react'
import Header from '../components/Header'
import Products from '../components/Products'

export default function Home({products, addCart}) {
  return (
    <main>
      <Header />
      <h1>Products</h1>
      <Products products={products}  addCart={addCart} />
    </main>
  )
}
