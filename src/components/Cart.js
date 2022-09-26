import React, { createContext, useState } from 'react'
import './cart.css'
import { ProductData } from './ProductData'
import CartHeader from './CartHeader';
import ProductDisplay from './ProductDisplay';
import CartTotal from './CartTotal';

export const CartContext = createContext();

function Cart() {

    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState(ProductData)


    function decrement(id) {

        console.log('decrement fired! ID = ', id)
        setItems(items.map(currentItem => {

            if (currentItem.id == id) {
                setTotalPrice(totalPrice - parseFloat(currentItem.price))
                return { ...currentItem, quantity: currentItem.quantity - 1 }
            }

            else {
                return currentItem
            }
        }))

        setQuantity(prev => prev - 1)
    }


    function increment(id) {

        console.log('increment fired! ID = ', id)
        setItems(items.map(currentItem => {
            if (currentItem.id == id) {
                setTotalPrice(totalPrice + parseFloat(currentItem.price))
                return { ...currentItem, quantity: currentItem.quantity + 1 }
            }

            else {
                return currentItem
            }
        }))
        setQuantity(prev => prev + 1)
    }

    function removeItem(id) {
        console.log('removeItem fired!')
        setItems(items.filter(item => item.id != id))
      }

    function clearCart() {
        console.log('clearCart triggered!');
        setQuantity(0)
        setTotalPrice(0)
        setItems(ProductData)
    }

  

    return (
        <CartContext.Provider value={{ increment , decrement , removeItem }}>
            <CartHeader quantity={quantity} />
            <ProductDisplay items={items} />
            <CartTotal totalPrice={totalPrice} clearCart={clearCart}/>

        </CartContext.Provider>
    )
}

export default Cart