import React from 'react'

function CartHeader({quantity}) {
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>continue shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>{quantity}</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="total-items">
                    you have <span className="total-items-count">{quantity}</span>{" "}
                    items in shopping cart
                </p>

            </section>
        </>
    )
}

export default CartHeader