import React,{useRef,useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Services from './Services';
import './home.css';
import arrow from './images/learn_arrow.png';
import buy from './images/buy.png';
import topImage from './images/top_image.png';
import stars from './images/stars.png';
import check from './images/check.png';
import memoji from './images/Memoji.png';
import insta from './images/insta.png';
import memojigirl from './images/Memoji_girl.png';
import phone from './images/phone.png';
import arrowdown from './images/arrow_down.png';
import girlemoji from './images/girl_emoji.png';
import x from './images/x.png';
import range from './images/range.png';
import styleCheck from './images/style_check.png';
import client from './images/client.png';
import viral from './images/viral.png';



const Home = ({scrollToServices}) => {

      const [input, setInput] = useState("");
      const [message, setMessage] = useState("");

      const servicesRef = useRef(null);
      const navigate = useNavigate();
    
  
      useEffect(() => {
        if (scrollToServices && servicesRef.current) {
          servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [scrollToServices]);
     
      const handleBuyNowClick = () => {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        navigate('/services');
      };
    
      const handleLearnMoreClick = () => {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        navigate('/services');
      };


      const handleInputChange = (e) => {
        setInput(e.target.value);
        setMessage(""); // Clear the message when something is entered
      }


      const handleLetsGo = (e)=>{
        e.preventDefault();
        if(input===""){
          setMessage("please enter username")
        }
      }

  return (
    <>

      <div className='top_image'>
        <img src={topImage} alt="top pic" />
      </div>
      <div className='banner_outer'>
        <div className='container'>
        <div className='social_heading'>
          <h1><span>Get fast social media services</span>with no sign-up required.</h1>
            <p className='social_para'>
             Password-Free Delivery: Boost your online presence with real followers, likes, and more. Fast delivery, secure transactions.
            </p>
          </div> 
          <div className='social_button'>
              <button type='submit' className='btn buy' onClick={handleBuyNowClick}>Buy Now <img src={buy} alt="Example " /></button>
              <button type='submit' className='btn learn' onClick={handleLearnMoreClick}>Learn More <img src={arrow} alt="Example " /></button>
          </div>
          <div className='social_middle'>
          <div className='social_list'>
              <ul>
              <li><img className="check-img" src={check} alt=''/>Higher Conversion</li>
                  <li><img className="check-img"  src={check} alt=''/>100% Growth Guaranteed</li>
                  <li><img className="check-img"  src={check} alt=''/>Rated 4.9/5 <span><img src={stars} alt=''/></span></li>
              </ul>
          </div>
         </div>
        </div>
      </div>
     
    {/* Result */}
    <div className='result_outer'>
      <div className='container'>
        <div className='result_grid'>
          <div className='result_block'>
            <div className='img_one'>
              <img src={memoji} alt=''/>
            </div>
            <div className='img_two'>
              <img src={insta} alt=''/>
            </div>
            <div className='img_three'>
              <img src={memojigirl} alt=''/>
            </div>
          </div>
          <div className='result_block'>
            <div className='img_phone'>
              <img src={phone} alt=''/>
            </div>
          </div>
          <div className='result_block'>
            <div className='text'>
              <h2>GET</h2>
            </div>
            <div className='res_img'>
              <img src={arrowdown} alt=''/>
            </div>
            <div className='text'>
              <h2>RESULTS</h2>
            </div>
            <div className='res_img'>
              <img src={arrowdown} alt=''/>
            </div>
            <div className='text'>
              <h2 className='style_text'>FAST</h2>
            </div>
            
          </div>
          <div className='result_block'>
          <div className='img_one'>
            <img src={girlemoji} alt=''/>
          </div>
          <div className='img_two'>
             <img src={x} alt=''/>
          </div>
          <div className='img_three'>
            <img src={range} alt=''/>
          </div>
          </div>
        </div>
      </div>
    </div>

   

    <section className='social_card_outer'>
      <div className='container'>
            <h2>The #1 Rated Social Media Services</h2>
            <p className='sub_heading'>Social Crow helps you get more, likes and comments 10x times faster than our competitors.</p>
            <div className='social_card'>
                <div className='social_card_first'>
                    <h3>Social proof</h3>
                    <p>Looking to increase your website's 
                        conversion rate? Look no further, 
                        our services provide amazing social proof to increase 
                        trust and confidence in your brand. With our help, 
                        you'll see a significant increase in your conversion rate in no time! 
                        From our research we have found that acounts with 
                        low followers have follow back rate of less than 5%.</p>
                </div>
                <div className='social_card_second'>
                    <h3>Build a large social media following to 
                        reach more people nad gain more customer</h3>
                </div>
                <div className='social_card_three'>
                    <h3>No password required</h3>
                </div>
            </div>
      </div>
    </section>

     {/* Goal Section */}
     <section className='goal_outer'>
      <div className='container'>
        <div className='heading'>
          <h2>
            Achieve Your Goals with<br />
            <span className='style_text'>Panda Fame</span>: Start Today
          </h2>
        </div>
        <div className='goal_buttons'>
          <input type='text' placeholder='Enter Your username' value={input} onChange={handleInputChange}/>
          <p>{message}</p>
          <button type='submit' className='btn let_go' onClick={handleLetsGo}>Lets Go</button>
        </div>
        <div className='check_text_grid'>
          <div className='check_text_block'>
            <div className='check_img'>
                <img src={styleCheck} alt=''/>
            </div>
            <div className='check_text'>
              <p>Join our 40,000+ successful clients</p>
            </div>
          </div>
          <div className='check_text_block'>
            <div className='check_img'>
                <img src={styleCheck} alt=''/>
            </div>
            <div className='check_text'>
              <p>Up to 10x more effective than ads</p>
            </div>
          </div>
          <div className='check_text_block'>
            <div className='check_img'>
                <img src={styleCheck} alt=''/>
            </div>
            <div className='check_text'>
              <p>Recommended by the best experts </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Successful Clients */}
    <section className='our_client'>
      <div className='container'>
        <div className='heading'>
          <h4>
            Our <span className='style_text'>Successful</span> Clients:
          </h4>
        </div>
        <div className='scroll_outer'>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>

        </div>

        <div className='scroll_outer scroll_outer_right'>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
          <div className='scroll_block'>
            <div className='name_img'>
              <div className='client_img'>
                 <img src={client} alt=''/>
              </div>
              <div className='client_text'>
                <h6 className='client_bussiness'>Entrepreneur</h6>
                <h4 client_name>Ravi Karumanchi</h4>
                <p className='cane'>@smartcane</p>
              </div>
            </div>
            <div className='bottom_text_flex'>
              <div className='text_block'>
                <h5>Client Since</h5>
                <p>Nov 2022</p>
              </div>
              <div className='text_block'>
                <h5>Followers</h5>
                <p>400k</p>
              </div>
              <div className='text_block'>
                <h5>Growth</h5>
                <p>+350k</p>
              </div>
            </div>
          </div>
        </div>
        <div className='client_bottom_text'>
          <p>Check out 40,000+ more successful clients that used our services</p>
        </div>
      </div>
    </section>


    <section className='brand_growth'>
      <div className='container'>
        <div className='heading'>
          <h4>Highly trusted by major brands, enterprises, and influencers 
            for authentic growth
            </h4>
        </div>
        <div className='growth_grid'>
          <div className='growth_block blue'>
            <h3>40,000+</h3>
            <p>Total clients</p>
          </div>
          <div className='growth_block white'>
            <h3>9,1 / 10</h3>
            <p>Customer Service Rating</p>
          </div>
        </div>
        <div className='growth_bottom_text'>
          <h4>
          For years we have been building up a large following of dedicated users that get paid to follow and help support our clients.
          </h4>
          <p>For a long time, we've gathered a big group of dedicated users who get paid to follow and support our clients. 
          They choose to visit your page and follow you naturally, bringing in real people genuinely interested in your account. 
          This leads to better and faster results than other growth services, all while keeping your account safe from any risks.
          </p>
        </div>
      </div>
    </section>

    <section className='viral'>
      <div className='container'>
        <div className='viral_grid'>
          <div className='viral_text_block'>
            <h4>Want to go viral</h4>
            <p>Purchasing social media services will attract real interest from your desired audience. 
                Seize this chance to take your business to the next level”
            </p>
            <button type='submit' className='btn' onClick={handleBuyNowClick}>Get Started</button> 
          </div>
          <div className='image_block'>
            <img src={viral} alt=''/>
          </div>
        </div>
        <div className='viral_grid reverse_column'>
        <div className='image_block'>
            <img src={viral} alt=''/>
          </div>
          <div className='viral_text_block'>
            <h4>Improve and Maximize Your Sales</h4>
            <p>Want to increase your sales? Our top-notch social media services can help! By buying these services, 
            you'll boost your brand's visibility, reaching more people and driving more sales. Don't wait, 
            get social media services now and watch your sales soar!"
            </p>
          </div>
        </div>
      </div>
    </section>

        <div ref={servicesRef}>
        <Services />
      </div>
    </>
  )
}

export default Home
