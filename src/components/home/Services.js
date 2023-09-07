import React from 'react';
import { Link } from 'react-router-dom';
import x from '../home/images/x.png'
import instagram from '../home/images/instagram.png'
import youtube from '../home/images/youtube.png'
import facebook from '../home/images/facebook.png'

const Services = (props) => {
    const {serviceRef} = props
  return (
    <>
     <div className='panda_fame_services' ref={serviceRef}>
        <div className='container'>
          <h2>Our Services</h2>
          <div className='panda_list'>
              <ul>
                  <li> <Link to='/twitter'> <span><img src={x} /></span>Twitter</Link></li>
                  <li><Link to='/instagram'><span><img src={instagram} /></span>Instagram</Link></li>
                  <li><Link to='/youtube'><span><img src={youtube} /></span>YouTube</Link></li>
                  <li><Link to='/facebook'><span><img src={facebook} /></span>Facebook</Link></li>
              </ul>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Services
