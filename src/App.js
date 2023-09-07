import React from 'react'
import Navbar from './components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import TwitterForm from './components/forms/TwitterForm'
import Instagram from './components/forms/Instagram'
import YouTube from './components/forms/YouTube'
import Facebook from './components/forms/Facebook'
import Careers from './components/pages/Careers'
import Cart from './components/navbar/Cart'
import Home from './components/home/Home';
import Footer from './components/home/Footer'
import Header from './components/home/Header'
import TermOfService from './components/pages/TermOfService'
import PrivacyPage from './components/pages/PrivacyPage'
import AboutPage from './components/pages/AboutPage'
import HistoryPage from './components/pages/HistoryPage'
import RefundPage from './components/pages/RefundPage'
import Faq from './components/pages/Faq'
import RequestRefill from './components/pages/RequestRefill'
import Troubleshoot from './components/pages/Troubleshoot'
import BlogPage from './components/pages/BlogPage'


function App() {

  const location = useLocation();

  return (
  
  <>
  
  {(location.pathname === '/' || location.pathname === '/services') && <Header />}
 <Navbar scrollToServices/>
  {/* <Home serviceRef={serviceRef}/> */}
  
  <Routes> 
    <Route path='/' element={<Home />}></Route>
    <Route path='/twitter'  element={<TwitterForm/>}></Route>
    <Route path='/instagram' element={<Instagram/>}></Route>
    <Route path='/youtube' element={<YouTube/>}></Route>
    <Route path='/facebook' element={<Facebook/>}></Route>
    <Route path='/careers'  element={<Careers/>}></Route>  
    <Route path='/cart'  element={<Cart/>}></Route> 
    <Route path='/services' element={<Home scrollToServices />}/>
    <Route path='/services' element={<Header scrollToServices />}/>
    <Route path='/term-of-service' element={<TermOfService/>}/>
    <Route path='/privacy-policy' element={<PrivacyPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/company_history' element={<HistoryPage/>}/>
    <Route path='/refund-and-delivery' element={<RefundPage/>}/>
    <Route path='/frequently-asked-questions' element={<Faq/>}/>
    <Route path='/support' element={<RequestRefill/>}/>
    <Route path='/troubleshooting' element={<Troubleshoot/>}/>
    <Route path='/blog' element={<BlogPage/>}/>
  </Routes>
  
  <Footer/>
  </>
  )
}






export default App