import './App.css';
import { data }  from './Data';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Home from '../src/pages/Home'
import Login from './pages/Login'
import Cart from '../src/pages/Cart'
import { useState, useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setProducts(data.products)    
  }, []);

  function addCart(selectedId) {
    console.log(selectedId)
    // 카트에 선택한 상품이 있는지 확인
    const productExist = carts.find(item => {
      return item.id === selectedId
    })
    
    // 카트에 선택한 상품이 있음
    if(productExist) { 
      const addItem = carts.map(item => { // map [] 반환
        return (
          // 같은 id의 상품이 있으면 수량 + 1 : 아니면 상품 추가
          item.id === selectedId ?
          {...productExist, quantity: productExist.quantity + 1 } : item
        )
      })
      setCarts(addItem);  // 카트에 [] 추가
    } else {
      // 카트에 선택한 상품이 없을 경우 상품 추가(quantity 속성 추가)
      const addItem = products.find(item => item.id == selectedId)
      setCarts([...carts, { ...addItem, quantity: 1 }])
      console.log('addItem = ', addItem)
    }
    console.log('add carts = ', carts)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={ <Home products={products} addCart={addCart} />} 
        />
        <Route path="/login" element={ <Login />} />
        <Route path="/cart" element={ <Cart carts={carts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
