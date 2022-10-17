import React from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom'

export default function Products({products, addCart}) {
  // console.log('priducts = ', products)
  let navigate = useNavigate();

  return (
    <div className='products'>
      {
        products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button 
              onClick={() => {
                addCart(product.id);
                let a = window.confirm('장바구니에 상품을 담았습니다.\n장바구니로 이동하시겠습니까?')
                console.log(a)
                if(a) navigate('/cart');
              }
            }>장바구니 추가
            </button>
          </div>
        ))
      }
    </div>  
  )
}
