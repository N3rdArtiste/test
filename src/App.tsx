import { useState,useEffect } from 'react';
import './App.css';
import {Cart, ProductListing} from './components/';
import {CartItem, Product} from './types';

const products = [
  {
    name:"Sledgehammer",
    price: 125.75
  },
  {
    name:"Axe",
    price:190.50
  },
  {
    name:"Bandsaw",
    price:562.13
  },{
    name:"Chisel",
    price:12.9
  },
  {
    name:"Hacksaw",
    price:18.45
  },
]
const App = ():JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    if (localStorage.getItem("eCommerceCartData")) {
      setCartItems(JSON.parse(localStorage.getItem("eCommerceCartData")??"[]"))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("eCommerceCartData", JSON.stringify(cartItems))
  }, [cartItems])
  
  const addToCartHandler = (product:Product)=>{
    const items = cartItems.map(e=>{return{...e}})
    const found = items.find(item=>item.name===product.name)
    if(found){
      found.quantity+=1
      setCartItems(items)
    }else{
      setCartItems([...items,{...product,quantity:1}])
    }
    }
  const removeFromCartHandler = (productName:string) =>{
    const items = cartItems.filter(item=>item.name!==productName)
    setCartItems(items)
  }
  
  return (
    <div style={{display:'flex',border:'1px red solid',maxWidth:1440,boxSizing:'border-box',height:'100vh',margin:'auto'}}>
      <div style={{flexBasis:'80%'}}>
      <ProductListing onAddToCartClick={addToCartHandler} data={products} />
      </div>
      <div style={{flexBasis:'20%',border:"1px solid black"}}>
      <Cart onRemoveFromCartClick={removeFromCartHandler} data={cartItems} />
      </div>
    </div>
  );
}

export default App;
