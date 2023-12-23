import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Product = ({ product, addToCart }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart({ ...product, id: uuidv4() })}>
                Add to Cart
            </button>
        </div>
    )
}

export default Product