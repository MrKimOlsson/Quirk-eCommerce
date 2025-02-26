import '../styles/navbar.scss';

export const Navbar = () => {
  return (
    <nav>
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
        <div>
            <div className='logo'>
                <h1>Qu</h1><h1 className='i'>i</h1><h1>rk</h1>
            </div>
        </div>
        <ul>
            <li>
                <a href="/">
                    Produkter
                </a>
            </li>

            <li>
                <a href="/products">
                   Mina sidor
                </a>
            </li>
            <li>
                <a href="/cart">
                    Kundvagn
                </a>
            </li>
        </ul>
    </nav>
  )
}
