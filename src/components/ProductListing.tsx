import { ProductListingProps,ProductListingItemProps } from '../types'
import { truncateNumber } from '../utils/priceUtils'

const ProductListingItem = ({name,price,onAddToCartClick}:ProductListingItemProps): JSX.Element =>{
return <div style={{border:'1px green solid',flexBasis:'33.33%',padding:5,boxSizing:'border-box'}}>
    <h3>{name}</h3>
    <p>Price: ${truncateNumber(price,2).toFixed(2)}</p>
    <button type="button" onClick={onAddToCartClick}>
        Add to Cart
    </button>
    </div>
}
export const ProductListing = ({data,onAddToCartClick}:ProductListingProps):JSX.Element => {
    return (
        <div style={{border:'1px solid blue',display:'flex',flexWrap:'wrap',padding:10,width:'100%',boxSizing:'border-box'}}>
            {data.map((product)=><ProductListingItem key={product.id} name={product.name} price={product.price} onAddToCartClick={()=>onAddToCartClick(product)} />)}
        </div>
    )
}

