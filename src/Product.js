import React from 'react'

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>e</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">

            </div>
        </div>
    )
}

export default Product
