import React from 'react'
import Header from '../components/Header'
import Products from '../components/Products'
import Hero from '../components/Hero'

export default function Home({products, addCart}) {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <h1>Products</h1>
        <Products products={products}  addCart={addCart} />
      </main>
    </>
  )
}
