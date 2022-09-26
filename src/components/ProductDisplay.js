import React from 'react'
import Item from './Item'

function ProductDisplay({items}) {
  return (
    <>
      <div className="cart-items">
        <div className="cart-items-container">
          {items.map(item => {
            return (<Item key={item.id} {...item} />)
          })}
        </div>
      </div>
    </>
  )
}

export default ProductDisplay