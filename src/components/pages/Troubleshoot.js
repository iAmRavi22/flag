import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import '../pages/page.css';
const Troubleshoot = () => {

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
  
    const scrollToSection = (ref) => {
      if (ref && ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      }
    };




  return (
    <>
     <div className='troubleshoot_container'>
        <div className='troubleshoot_heading'>
            <h1>Troubleshooting Your Order's Issue</h1>
            <span><Link onClick={() => scrollToSection(section1Ref)}>We can't find your account</Link></span>
            <span><Link onClick={() => scrollToSection(section2Ref)}>We can't find your link</Link></span>
            <span><Link onClick={() => scrollToSection(section3Ref)}>Private or Protected</Link></span>
        </div>
        <div className ='troubleshoot_sec_one' id="section1" ref={section1Ref}>
          <h4>We Can't find your account</h4>
          <p>We are having difficulty sending your order because the username provided could not be found. Please check that the username is correct and try again. Submit your link in one of the recommended formats below.</p>
        </div>
        <div className ='troubleshoot_sec_two'  id="section2" ref={section2Ref}>
          <h4>We Can't find your link</h4>
          <p>We are having difficulty sending your order because the link provided could not be found or is not for a post.</p>
          <span>Things to consider:</span>
        <ul>
            <li>Make sure the account is public.</li>
            <li>Does the link go to a post?</li>
            <li>Is the link for broken?</li>
            <li>Is the post available or has it been deleted?</li>
        </ul>
        </div>
        <div className='troubleshoot_sec_three' id="section3" ref={section3Ref}>
         <h4>Private or protected account</h4>
         <p>We are having difficulty sending your order because the account provided is private or protected. We can only deliver our services to public accounts. Please make your account public while we deliver your order. Once your order is delivered, you can make your account private again.</p>
         <span>How to make your account public:</span>
         <ul>
            <li>Is your Twitter protected?<span><a href='https://help.twitter.com/en/safety-and-security/how-to-make-twitter-private-and-public'>How to protect and unprotect your Tweets</a></span> </li>
            <li>Is your Instagram private? <span><a href='https://help.instagram.com/448523408565555'>Make your Instagram account public/private</a></span></li>
         </ul>
        </div>
        </div> 
    </>
  )
}

export default Troubleshoot
