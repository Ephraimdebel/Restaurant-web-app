import React from 'react'
import './Product.css'
function ProductCard({ image, title, price,desc }) {
    const maxLength = 100;

    const renderDescription = (description) => {
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + '...';
        }
        return description;
    };
    return (
        <div className="product_card">
            <img className="product-image" src={image} alt={title} />
            <h3 className="product-name">{title}</h3>
            <p>
            <p className="product-description">{renderDescription(desc)}</p>
            </p>
            <div className='price_button'>
                <p className="product-price">${price}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );

}

export default ProductCard
