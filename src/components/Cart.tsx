import Big from 'big.js'
import { CartProps,CartItemProps } from '../types'
import { truncateNumber } from '../utils/priceUtils'

const CartItem = ({name,price,quantity,onRemoveFromCartClick}:CartItemProps): JSX.Element =>{
const totalPrice = truncateNumber(+new Big(price).mul(quantity),2).toFixed(2)
return <div style={{border:'1px green solid',flexBasis:'33.33%',padding:5,boxSizing:'border-box'}}>
        <h3>{name}</h3>
        <p>Price: ${truncateNumber(price,2).toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${totalPrice}</p>
        <button type="button" onClick={onRemoveFromCartClick}>
            Remove from Cart
        </button>
        </div>
    }

export const Cart = ({data,onRemoveFromCartClick}:CartProps):JSX.Element => {
const total = data.reduce((acc,cv)=> {
    const  a = new Big(acc)
    const price = new Big(cv.price)
    return +truncateNumber(+a.add(price.mul(cv.quantity)),2)
},0).toFixed(2)
    return (
        <div style={{display:'flex',flexDirection:'column',boxSizing:'border-box',padding:10,height:'100%'}}>
            <h2>Cart</h2>
       <div style={{flexGrow:1,overflow:'scroll' }}>
       {data.map((item)=><CartItem key={item.name} name={item.name} price={item.price} quantity={item.quantity} onRemoveFromCartClick={()=>onRemoveFromCartClick(item.name)}  />)}
       </div>
       <div style={{width:'100%',border:'1px solid gold'}}>
           <b>Total: </b><p>${total}</p>
       </div>
        </div>
    )
}
