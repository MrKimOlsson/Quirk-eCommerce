import { useState } from 'react';
import '../styles/navbar.scss';
import '../styles/slideinCart.scss';
import SlideinCart from './SlideinCart';

export const Navbar: React.FC = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const handleCartToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    console.log("toggle cart");
    setCartOpen(!cartOpen);
  };

  return (
    <nav>
    {/* <div> */}
         <div className='logo'>
            <h1>Q<span>u</span></h1><h1 className='i'>i</h1><h1 className='under-line'>rk</h1>
        </div>
      {/* </div> */}
      <ul>
        <li>
          <a href="/">
            FB
          </a>
        </li>

        <li>
          <a href="/products">
            IN
          </a>
        </li>
        <li>
          <a href="/cart">
            TW
          </a>
        </li>
        <li>
          <a href="/cart">
            LI
          </a>
        </li>
      </ul>
    
      <ul>
        <li>
          <a href="/">
            Produkter
          </a>
        </li>

        <li>
          <a href="/profile">
             Mina sidor
          </a>
        </li>
        <li>
          <a href="/" onClick={handleCartToggle}>
            Kundvagn
          </a>
        </li>
      </ul>
      <SlideinCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
}