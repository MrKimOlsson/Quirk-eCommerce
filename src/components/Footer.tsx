import '../styles/footer.scss';

export const Footer = () => {
  return (
    <footer>
        {/* <p className='slogan-text'>What´s your</p> */}

        <div className='logo'>
            <h1>Q<span>u</span></h1><h1 className='i'>i</h1><h1 className='under-line'>rk</h1>
        </div>
        <section className='column-wrapper'>

            <div className="column">
                <h4>Social media</h4>
                <ul>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">LinkedIn</a>
                    </li>
                </ul>
            </div>

            <div className="column">
                <h4>Länkar</h4>
                <ul>
                    <li>
                        <a href="#">GDPR</a>
                    </li>
                    <li>
                        <a href="#">Frakt & Retur</a>
                    </li>
                    <li>
                        <a href="#">Leverans</a>
                    </li>
                    <li>
                        <a href="#">Kundtjänst</a>
                    </li>
                </ul>
            </div>

            <div className="column">
                <h4>Produkter</h4>
                <ul>
                    <li>
                        <a href="#">Män</a>
                    </li>
                    <li>
                        <a href="#">Kvinnor</a>
                    </li>
                    <li>
                        <a href="#">Barn</a>
                    </li>
                    <li>
                        <a href="#">Accesoarer</a>
                    </li>
                </ul>
            </div>


            <div className="column">
                <h4>Butik</h4>
                <ul>
                    <li>
                        Hittepågatan 12
                    </li>
                    <li>
                        123 45
                    </li>
                    <li>
                        Stockholm
                    </li>
                    <li>
                        <a href="#">Tel: 020-123 456</a>
                    </li>
                </ul>
            </div>
        </section>
    </footer>
  )
}
