import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import x from '../home/images/x.png'
import instagram from '../home/images/instagram.png'
import youtube from '../home/images/youtube.png'
import facebook from '../home/images/facebook.png'
import { useSelector } from 'react-redux';




const Cart = () => {
    const currentCurrency = useSelector((state) => state.currency);
    console.log("currency>>>", currentCurrency)
    const [cartData, setCartData] = useState([]);
    console.log("cartData>>>>>>", cartData)

    const [email, setEmail] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve stored data from localStorage
        const storedData = JSON.parse(localStorage.getItem('serviceData')) || [];
        console.log("storedData>>>>>>>", storedData)
        setCartData(storedData);
    }, []);


    const handleDeleteItem = (id) => {
        const updatedCartData = cartData.filter(item => item.id !== id);
        console.log("updatedCartData>>>>>>", updatedCartData)
        setCartData(updatedCartData);
        localStorage.setItem('serviceData', JSON.stringify(updatedCartData));
        window.location.reload()
    };

    const handleEdit = (key) => {
        console.log("key>>>>>", key)
        const editData = cartData.find(item => item.id === key);
        console.log("editDAta>>>>>>", editData)
        let editState = {};

        if (editData?.serviceId?.includes('Facebook') || editData?.service?.includes('Facebook')) {
            editState = { editType: 'facebook', formData: editData };
            navigate('/facebook', { state: editState }); // Redirect to Instagram edit page
        }
        else if (editData?.serviceId?.includes('Twitter') || editData?.service?.includes('Twitter')) {
            editState = { editType: 'twitter', formData: editData };
            navigate('/twitter', { state: editState }); // Redirect to Instagram edit page
        }
        else if (editData?.serviceId?.includes('Instagram') || editData?.service?.includes('Instagram')) {
            editState = { editType: 'instagram', formData: editData };
            navigate('/instagram', { state: editState }); // Redirect to Instagram edit page
        }
        else if (editData?.serviceId?.includes('YouTube') || editData?.service?.includes('YouTube')) {
            editState = { editType: 'youtube', formData: editData };
            navigate('/youtube', { state: editState }); // Redirect to Instagram edit page
        }

    };


    let totalPrice = 0;
    let euroPrice = 0;
    let poundPrice =0;
    if (cartData) {
        cartData?.forEach((item) => {
            totalPrice += parseFloat(item.price); // Convert item.price to a float if needed
            console.log("totalprice>>>>>>>", totalPrice)

        });
    }




    const handlePaymentClick = async () => {

        const buttonElement = document.querySelector('.off-pay'); // Select the button element
        buttonElement.textContent = 'Redirecting...';
        if (!email) {
            alert("Please enter email")
            buttonElement.textContent = 'Pay with coinbase for 5% off';
        } else {
            const object = {
                amount: totalPrice,
                currency: currentCurrency.currency,
                email: email
            }
            try {
                const response = await axios.post('http://localhost:8000/api/create-charge', object); // Replace with your server endpoint
                console.log("response>>>>>>>", response)
                const hosted_url = response.data.charge.hosted_url;
                window.location.href = hosted_url; // Redirect to Coinbase payment page
            } catch (error) {
                console.error('Error creating charge:', error);
                buttonElement.textContent = 'Pay with coinbase for 5% off';
            }
        }
    };



    const handleBack = () => {

        if (cartData[0]?.serviceId?.includes('Facebook') || cartData[0]?.service?.includes('Facebook')) {
            navigate('/facebook')
        }
        else if (cartData[0]?.serviceId?.includes('Twitter') || cartData[0]?.service?.includes('Twitter')) {
            navigate('/twitter')
        }
        else if (cartData[0]?.serviceId?.includes('YouTube') || cartData[0]?.service?.includes('YouTube')) {
            navigate('/youtube')
        }
        else if (cartData[0]?.serviceId?.includes('Instagram') || cartData[0]?.service?.includes('Instagram')) {
            navigate('/instagram')
        }
        else {
            navigate('/')
        }
    }









    return (
        <>
            <div className="link_back container">
                <button type='button' className='Continue-btn' onClick={handleBack}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5"><path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd"></path></svg>Continue Shopping</button>
            </div>

            {cartData.length > 0 ?
                <div className='cart container'>
                    <div className='cart-inner'>
                        <div className='cart_container'>
                            <p className='otder-heading'>Order Items</p>
                            <div className="cart-item">
                                {cartData && cartData.map((item) => (
                                    <div key={item.id} className="cart-item-inn">
                                        <div className="cart-item-details">
                                            <p className='services-text'>Services: {item.serviceId || item.service?.split('|')[1]}</p>
                                            <p className='quantity-text'>Quantity: {item.quantity}</p>
                                            <p className='sending-text'>Sending to: {item.link || item.name}</p>
                                        </div>
                                        <div className='cart-btns'>
                                            {currentCurrency.currency === 'USD' ?
                                                <p>Total: <span>${item.price}</span> </p>
                                                : currentCurrency.currency === 'EUR' ?
                                                    <p>Total: <span>€{item.price}</span> </p>
                                                    : currentCurrency.currency === 'GBP' ?
                                                        <p>Total: <span>£{item.price}</span> </p>
                                                        : ""
                                            }
                                            <button type='submit' onClick={() => handleEdit(item.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg></button>
                                            <button onClick={() => handleDeleteItem(item.id)} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='payment_form'>
                            <div className='express_checkout'>
                                <p className='small-heading'>Express Checkout</p>
                            </div>

                            {currentCurrency.currency === 'USD' ?
                                <p className='sub-t'>Subtotal <span>$ {totalPrice}</span> </p>
                                : currentCurrency.currency === 'EUR' ?
                                    <p className='sub-t'>Subtotal <span> €{totalPrice}</span> </p>
                                    : currentCurrency.currency === 'GBP' ?
                                        <p className='sub-t'>Subtotal <span>£ {totalPrice}</span> </p>
                                        : ""
                            }
                            <p className='cup-c'><span><svg class="mt-0.5 h-4 w-4 fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 96c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"></path></svg>FRENZY50</span> <span>-€20</span></p>
                            <label className='promo-label'>Promo code/coupon</label>
                            <div className='promo-input'>
                                <input type='text' placeholder='Enter code'></input>
                                <button className='btn btn-primary'>Apply</button>
                            </div>
                            <hr />
                            {currentCurrency.currency === 'USD' ?
                                <p className='tot-p'>Total <span>${totalPrice}</span> </p>
                                : currentCurrency.currency === 'EUR' ?
                                    <p className='tot-p'>Total <span>€{euroPrice}</span> </p>
                                    : currentCurrency.currency === 'GBP' ?
                                        <p className='tot-p'>Total <span>£{poundPrice}</span> </p>
                                        : ""
                            }
                            <div className='input-box small'>
                                <input className='input-filds' type='email' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <div class="svg-icons">
                                    <svg className='svg-icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4"><path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"></path></svg>
                                </div>
                            </div>
                            <button className='off-pay' onClick={handlePaymentClick}>Pay with <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="Coinbase logo" viewBox="0 0 688 123" className="h-4"><title>Coinbase logo</title><path class="fill-white" d="M138.857 34.3392C113.863 34.3392 94.3343 53.3277 94.3343 78.7477C94.3343 104.168 113.37 122.994 138.857 122.994C164.343 122.994 183.71 103.843 183.71 78.5852C183.71 53.4902 164.674 34.3392 138.857 34.3392ZM139.025 104.674C124.792 104.674 114.363 93.611 114.363 78.754C114.363 63.7282 124.624 52.6714 138.857 52.6714C153.258 52.6714 163.681 63.897 163.681 78.754C163.681 93.611 153.258 104.674 139.025 104.674ZM189.168 53.659H201.584V121.35H221.443V35.9893H189.168V53.659ZM44.3536 52.6652C54.7832 52.6652 63.0581 59.103 66.1995 68.6785H87.2209C83.4113 48.2087 66.5305 34.3392 44.5223 34.3392C19.5288 34.3392 0 53.3277 0 78.754C0 104.18 19.0355 123 44.5223 123C66.0371 123 83.249 109.131 87.0586 88.492H66.1995C63.2205 98.0675 54.9456 104.674 44.516 104.674C30.1145 104.674 20.0222 93.611 20.0222 78.754C20.0285 63.7282 29.9584 52.6652 44.3536 52.6652ZM566.518 70.4973L551.954 68.3535C545.003 67.3659 540.038 65.0533 540.038 59.603C540.038 53.659 546.495 50.6901 555.264 50.6901C564.863 50.6901 570.989 54.8153 572.313 61.5844H591.511C589.357 44.4148 576.117 34.3455 555.763 34.3455C534.742 34.3455 520.84 45.0773 520.84 60.2656C520.84 74.7913 529.946 83.2167 548.313 85.8544L562.877 87.9982C569.996 88.9858 573.968 91.7984 573.968 97.0799C573.968 103.849 567.017 106.655 557.418 106.655C545.665 106.655 539.045 101.868 538.052 94.6048H518.523C520.347 111.281 533.418 123 557.25 123C578.933 123 593.328 113.093 593.328 96.0861C593.328 80.8979 582.905 72.9725 566.518 70.4973ZM211.514 0.825042C204.232 0.825042 198.767 6.10656 198.767 13.3694C198.767 20.6323 204.225 25.9138 211.514 25.9138C218.796 25.9138 224.26 20.6323 224.26 13.3694C224.26 6.10656 218.796 0.825042 211.514 0.825042ZM502.966 65.2158C502.966 46.7274 491.712 34.3455 467.88 34.3455C445.373 34.3455 432.795 45.7398 430.309 63.2407H450.007C451 56.4716 456.296 50.8588 467.549 50.8588C477.648 50.8588 482.613 55.3153 482.613 60.7656C482.613 67.866 473.507 69.6785 462.253 70.8349C447.028 72.4849 428.161 77.7664 428.161 97.58C428.161 112.937 439.583 122.837 457.788 122.837C472.021 122.837 480.958 116.893 485.43 107.48C486.092 115.9 492.38 121.35 501.155 121.35H512.74V103.687H502.972V65.2158H502.966ZM483.437 86.6794C483.437 98.0737 473.507 106.493 461.423 106.493C453.972 106.493 447.683 103.355 447.683 96.7549C447.683 88.3357 457.782 86.0231 467.05 85.0356C475.987 84.2105 480.952 82.2292 483.437 78.429V86.6794ZM378.012 34.3392C366.92 34.3392 357.652 38.9645 351.032 46.7211V0H331.172V121.35H350.701V110.124C357.321 118.212 366.758 123 378.012 123C401.843 123 419.886 104.18 419.886 78.754C419.886 53.3277 401.512 34.3392 378.012 34.3392ZM375.033 104.674C360.8 104.674 350.37 93.611 350.37 78.754C350.37 63.897 360.962 52.6714 375.195 52.6714C389.596 52.6714 399.689 63.7345 399.689 78.754C399.689 93.611 389.265 104.674 375.033 104.674ZM283.671 34.3392C270.762 34.3392 262.319 39.6208 257.354 47.0524V35.9893H237.656V121.344H257.516V74.9538C257.516 61.9094 265.791 52.6652 278.038 52.6652C289.46 52.6652 296.574 60.7531 296.574 72.4787V121.35H316.434V70.9974C316.44 49.5275 305.354 34.3392 283.671 34.3392ZM688 75.9476C688 51.5151 670.126 34.3455 646.126 34.3455C620.639 34.3455 601.934 53.4965 601.934 78.754C601.934 105.337 621.963 123 646.457 123C667.147 123 683.366 110.781 687.5 93.4485H666.81C663.831 101.043 656.549 105.337 646.781 105.337C634.035 105.337 624.436 97.4112 622.288 83.5417H687.994V75.9476H688ZM623.449 69.341C626.597 57.4529 635.534 51.6776 645.795 51.6776C657.049 51.6776 665.655 58.1155 667.641 69.341H623.449Z"></path></svg> for 5% off</button>
                            <button className='simple-pay' type='submit'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5"><path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path><path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd"></path></svg>Payment</button>
                        </div>
                    </div>
                    <p className='t-c-bottom'>By placing your order, you agree to Panda Fame's <span><Link to='/term-of-service'>Terms of Service</Link></span> and <span><Link to='/privacy-policy'>Privacy Policy</Link></span>.</p>
                </div>

                :
                <div className='empty_cart'>
                    <div className='container'>
                        <h3>Your cart is empty</h3>
                        <h4>Our Services</h4>
                        <div className='panda_list_service'>
                            <ul>
                                <li> <Link to='/twitter'> <span><img src={x} alt='' /></span>Twitter</Link></li>
                                <li><Link to='/instagram'><span><img src={instagram} alt='' /></span>Instagram</Link></li>
                                <li><Link to='/youtube'><span><img src={youtube} alt='' /></span>YouTube</Link></li>
                                <li><Link to='/facebook'><span><img src={facebook} alt='' /></span>Facebook</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart
