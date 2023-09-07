import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import logo from './images/logo.png';
import call from './images/call.png';
import email from './images/email.png';
import location from './images/location.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency } from '../../store/action-creator';


const Footer = () => {
   const dispatch = useDispatch();
   const currentCurrency = useSelector((state) => state.currency);
 
   const location = useLocation();

   const handleCurrencyChange = (e) => {
     const newCurrency = e.target.value;
     dispatch(changeCurrency(newCurrency));
   };

  return (
    <>
      
      <footer className='footer'>
      <div className='container'>
         <div className='footer_grid'>
            <div className='brand_block'>
               <a href='#'><img src={logo} alt=''/></a>
               <p>One of the fastest growing social media follower service providers, Panda Fame offers high-quality services as well as first-rate customer service. </p>
            </div>
            <div className='link_block'>
               <h4>About Us</h4>
               <ul>
                  <li>
                     <Link to='/about' >About</Link>
                  </li>
                  <li>
                     <Link to='/company_history' >Company History</Link>
                  </li>
                  <li>
                     <Link to='/careers' >Careers</Link>
                  </li>
                  <li>
                     <Link to='blog' >Blog</Link>
                  </li>
               </ul>
            </div>
            <div className='link_block'>
               <h4>Our Services</h4>
               <ul>
                  <li>
                     <Link to='/instagram'>Instagram</Link>
                  </li>
                  <li>
                     <Link to='/twitter'>Twitter</Link>
                  </li>
                  <li>
                     <Link to='/youtube'>YouTube</Link>
                  </li>
                  <li>
                     <Link to='/facebook'>Facebook</Link>
                  </li>
               </ul>
            </div>
            <div className='link_block'>
               <h4>Helpful Links</h4>
               <ul>
                  <li>
                     <Link to='/frequently-asked-questions'>FAQs</Link>
                  </li>
                  <li>
                     <Link to='/support' >Request a refill</Link>
                  </li>
                  <li>
                     <Link to='/support' >Support Available</Link>
                  </li>
                  <li>
                     <Link to='/troubleshooting'>Troubleshooting</Link>
                  </li>
               </ul>
            </div>
            <div className='link_block'>
               <h4>Contact Us</h4>
               <ul>
                  <li>
                     <Link><img src={call} alt=''/>Contact Support</Link>
                  </li>
                  <li>
                     <Link to="mailto:Demo@gmail.com" ><img src={email} alt=''/>Demo@gmail.com</Link>
                  </li>
                  <li>
                     <Link ><img src={call} alt=''/>+1-251-219-9639</Link>
                  </li>
                  <li>
                     <Link ><img src={location} alt=''/>Lorem Ipsum is simply 
                        printing and typesetting 
                        industry.</Link> 
                  </li>
               </ul>
            </div>
         </div>
      </div>
      {(location.pathname === '/' || location.pathname === '/services') ? 
      <div className="lower_footer">
      <select value={currentCurrency} onChange={handleCurrencyChange}>
        <option value="USD">US$ - United States Dollar</option>
        <option value="EUR">Euro</option>
        <option value="GBP">Pound Sterling</option>
      </select>
    </div> : ""
}
    <hr/>
    <div className='footer_low'>
      <p>© 2023 Social Crow is a trading name of Social Freak Ltd - 14659411</p>
      <p>All rights reserved.<Link to='/term-of-service'>Terms Of Service</Link>·<Link to='/privacy-policy'>Privacy Policy</Link>· <Link to='/refund-and-delivery'>Refund and Shipping</Link></p>
    </div>
     </footer>


    </>
  )
}

export default Footer
