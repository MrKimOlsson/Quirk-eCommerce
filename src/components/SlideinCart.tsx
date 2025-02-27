import React from 'react';
import '../styles/slideinCart.scss';

interface SlideInCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlideInCart: React.FC<SlideInCartProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`slide-in-cart ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <h3>Kundvagn</h3>

      <div className='cart-item'>
        <div className='cart-item-image'></div>
        <h4 className='cart-item-title'>Product Title</h4>
        <h5 className='cart-item-price'>Price: 123kr</h5>
      </div>

      <div className='cart-item'>
        <div className='cart-item-image'></div>
        <h4 className='cart-item-title'>Product Title</h4>
        <h5 className='cart-item-price'>Price: 123kr</h5>
      </div>
      
      <a href="/cart">Go to Cart</a>
    </div>
  );
};

export default SlideInCart;