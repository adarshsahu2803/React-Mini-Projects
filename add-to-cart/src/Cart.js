import React, {useState, useEffect} from "react";

const Cart = ({ cartItems, removeFromCart }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let newTotal = 0;
        cartItems.forEach((item) => {
            newTotal += item.price;
        });
        setTotal(newTotal);
    }, [cartItems]);

    const subtractFromTotal = (amount, index) => {
        setTotal(total - amount)
        removeFromCart(index)
    }

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}{' '}
                        <button onClick={() => subtractFromTotal(item.price, index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                <h3>Total: ${total}</h3>
            </div>
        </div>

    )
}

export default Cart