import React, { useContext , usestate } from "react";
import { CartContext } from "./Cart";

const Items = (props) => {
  console.log('Item rendered!')

  const {increment , decrement , removeItem} = useContext(CartContext);
  const { id, description, title, img, price, quantity} = props;
  // const [itemQuantity , setItemQuantity] = usestate(quantity)
 
  // These are just dummy functions , remove them later , Starting below 
  // function removeItem(e) {
  //   console.log('removeItem fired!')
  //   e.target.parentElement.parentElement.remove();
  // }

  // function increment(e) {
  //   console.log('increment fired!')
  // }
  // function decrement(e) {
  //   console.log('decrement fired!')
  // }

  // These are just dummy functions , remove them later , The END
 
  return (

    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" 
          onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" 
          onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
