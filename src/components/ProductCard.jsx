import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <span className="product-category">{product.category}</span>
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image"
          loading="lazy"
        />
      </div>
      
      <div className="product-details">
        <h3 className="product-title" title={product.title}>{product.title}</h3>
        
        <div className="product-rating">
          <Star className="star-icon" size={16} />
          <span style={{ fontWeight: 600, marginRight: 4 }}>{product.rating?.rate}</span>
          <span className="rating-count">({product.rating?.count} reviews)</span>
        </div>
        
        <p className="product-description" title={product.description}>
          {product.description}
        </p>
        
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="btn-primary" aria-label={`Add ${product.title} to cart`}>
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
