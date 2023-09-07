import  { useState, useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import StaticExample from '../pages/StaticExample'
import Staticpop from '../pages/Staticpop'
import { useNavigate,useLocation } from 'react-router-dom'
import logo from '../home/images/logo.png';
import cart from '../home/images/cart.png';
import buy from '../home/images/buy.png';
import toggle from '../home/images/toggle.png';
import twitternav from '../home/images/twitter-nav.png';
import youtubenav from '../home/images/youtube-nav.png';
import facebooknav from '../home/images/facebook-nav.png';
import instagramnav from '../home/images/instagram-nav.png';



function Navbar({scrollToServices}) {
  const [orderPopup, setOrderPopup] = useState(false);
  const [followPopup, setFollowPopup] = useState(false);
  const [cartItemData, setCartItemData] = useState("");
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState();


  const navigate = useNavigate();
  const location = useLocation();
  const handleOpenOrderPopup = () => {
    setOrderPopup(true)
    console.log("popup open")
  }

  const handleOpenFollowPopup = () => {
    setFollowPopup(true)
  }

  const handleGoToCart = () => {
    console.log("cart")
    navigate('/cart')
  }


  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem('serviceData')) || []
    console.log('cartItem>>>>>>>', cartItem.length)
    setCartItemData(cartItem.length)
  }, [])

  const servicesRef = useRef(null);

  useEffect(() => {
    if (scrollToServices && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToServices]);
 
  const handleScroll = () => {
    servicesRef?.current?.scrollIntoView({ behavior: 'smooth' });
    navigate('/services');
  };
  
  const toggleOffcanvas = () => {
    setIsOffcanvasVisible(false);
  };

const openCanvas = ()=>{
  setIsOffcanvasVisible(true)
}

  return (
    <>
      <StaticExample orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <Staticpop followPopup={followPopup} setFollowPopup={setFollowPopup} />

      <header className='header'>
        <div className="container">
          <div className="header_flex">
            <div className='logo'>
              <a className="navbar-brand" href="#" ><img src={logo} alt="Logo" /></a>
            </div>
            <div className='menu_outer'>
              <div className='cart_icon_outer'>
                <img onClick={handleGoToCart} src={cart} alt=''/>
                {cartItemData > 0 && <span className="cart-icon-tooltip">{cartItemData}</span>}
              </div>
              {(location.pathname === '/' || location.pathname === '/services') && <button type='button' className='btn get_start' onClick={handleScroll}>Get Started <img src={buy} alt="Logo" /></button>}
              <nav className="navbar">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" onClick={openCanvas}><img src={toggle} alt="toggle" /></button>

                <div className={`right-menu offcanvas offcanvas-end ${isOffcanvasVisible ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Services</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label= "Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/twitter' onClick={toggleOffcanvas}><img src={twitternav} alt="twitternav img" />Twitter</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/youtube'  onClick={toggleOffcanvas}><img src={youtubenav} alt="youtube img" />Youtube</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/facebook'  onClick={toggleOffcanvas}><img src={facebooknav} alt="facebook img" />Facebook</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/instagram'  onClick={toggleOffcanvas}><img src={instagramnav} alt="finstagram img" />Instagram</Link>
                      </li>
                      <hr></hr>



                      <li className="nav-item">
                        <a className="nav-link" onClick={handleOpenOrderPopup}>Track Order</a>
                        {/* <Link  className="nav-link active" to='/pop'>Track Order</Link> */}

                      </li>


                      <li className="nav-item">
                        <a className="nav-link active" onClick={handleOpenFollowPopup} >Follow & Earn</a>
                      </li>


                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/careers'  onClick={toggleOffcanvas}>Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>


    </>
  )
}

export default Navbar