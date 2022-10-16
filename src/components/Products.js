import React from 'react'

export default function Products({products, addCart}) {
  // console.log('priducts = ', products)
  return (
    <>
      <div>Products</div>
      {
        products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button 
              onClick={() => addCart(product.id)}>장바구니 추가
            </button>
          </div>
        ))
      }
    </>  
  )
}
