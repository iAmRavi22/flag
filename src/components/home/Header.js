import React,{useRef,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Header = ({scrollToServices}) => {
  const servicesRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    if (scrollToServices && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToServices]);
 
  const handleGo = () => {
    navigate('/services');
  };


  return (
    <>
      <div className='announsment_bar'>
        <div className='bar-flex'>
          <button type='button' className='btn time' onClick={handleGo}>Limited-time offer</button>
          <p>50% OFF all services for the next</p>
          <button type='button' className='btn hour' onClick={handleGo}>5 hours</button>
        </div>
      </div>
    </>
  )
}

export default Header
