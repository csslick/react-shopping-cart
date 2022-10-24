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
  const [totalPrice, setTotalPrice] = useState(0);  // 카트상품총액

  useEffect(() => {
    setProducts(data.products)  
  }, []);

  // cart update
  useEffect(() => {
    handleTotalPrice();
  },[carts]);

  // 장바구니 상품 삭제
  function clearItem(selectedId) {
    const updateCart = carts.filter(item => {
      return item.id !== selectedId
    })
    setCarts(updateCart);
  }

  function handleTotalPrice() {
    // 카트에 상품이 있으면
    if(carts.length > 0) {
      const prices = carts.map(item => {
        return {price:  item.price * item.quantity}
      })
      // let _totalPrice = prices.reduce((acc, cur) => acc.price + cur.price)
      let allPrice  = 0;
      for (let i in prices) {
        allPrice += prices[i].price 
      }
      setTotalPrice(allPrice);
    } else {
      setTotalPrice(0);
    }
  }

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
      console.log('addItem = ', addItem);
      setCarts(addItem);  // 카트에 [] 추가
    } else {
      // 카트에 선택한 상품이 없을 경우 상품 추가(quantity 속성 추가)
      const addItem = products.find(item => item.id == selectedId)
      setCarts([...carts, { ...addItem, quantity: 1 }])
      console.log('addItem = ', addItem)
    }
    console.log('add carts = ', carts)
  }

  // 장바구니 상품 수량+
  function addItem(selectedId) {
    console.log('addItem = ', selectedId)
    addCart(selectedId)
  }

  // 장바구니 상품 수량-
  function delItem(selectedId) {
    const item = carts.find(item => item.id === selectedId)
    console.log('item =', item)

    if(item.quantity > 1) {
      let updateCarts = carts.map(item => {
        return item.id == selectedId ?
          {...item, quantity: item.quantity - 1} : item
      })
      setCarts(updateCarts);
    } else {
      let updateCarts = carts.filter(item => {
        return item.id !== selectedId 
      })
      console.log('updateCarts = ', updateCarts);
      setCarts(updateCarts)
    }

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={ <Home products={products} addCart={addCart} />} 
        />
        <Route path="/login" element={ <Login />} />
        <Route 
          path="/cart" 
          element={ 
            <Cart 
              carts={carts} 
              addItem={addItem} 
              delItem={delItem }
              totalPrice={totalPrice}
              clearItem={clearItem}
            />} 
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
