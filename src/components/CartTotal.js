import React from 'react'

function CartTotal({totalPrice , clearCart }) {
    return (
        <>
            <div className="card-total">
                <h3>
                    Cart Total : <span>₹{totalPrice}</span>
                </h3>
                <button>checkout</button>
                <button className="clear-cart" onClick={clearCart}>
                    Clear Cart
                </button>
            </div>
        </>
    )
}

export default CartTotal