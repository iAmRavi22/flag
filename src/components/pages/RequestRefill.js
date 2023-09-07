import React from 'react'
import '../pages/page.css';



const RequestRefill = () => {
  return (
    <>
      <div className='request_container'>
        <div className='request_middle'>
            <div className='request_card'>
                <h4>Need a free refill?</h4>
                <span>Request a free refill</span><br/>
                <p>Have you lost followers? If you have purchased any of our services, you can request a refill on your order page.</p>
                <label>Order number</label>
                <input type='text' placeholder='Enter order number'></input>
                <button type='submit'>Track order</button>
            </div>
            <div className='request_card'>
                <h4>Contact Support</h4>
                <span>Create a support ticket</span>
                <p>Having an issue with your order?
                   Let us know, and we will aim to respond within 48 hours.</p>
                   <button type='submit'>Create a ticket</button>
            </div>
            <div className='request_card'>
                <h4>Contact Sales</h4>
                <span>Looking for a custom order</span>
                <p>Are you looking for a discount on a large order? We work with companies and individuals of all sizes to help them achieve their goals.</p>
                <button type='submit'>speak to sales</button>
            </div>
        </div>
        <div className='lower_request_section'>
            <h4>We are here to help.</h4>
            <p>If you need help with your order, our representatives are available to assist you. You can contact us by creating a ticket above and we will be happy to help. We recommend that you include your order number in your message so that we can quickly identify your order and provide you with the best possible support. If you can't remember it please include the link/username to help us identify you.</p>
            <p>Our representatives are available to answer any questions you may have about your order, provide technical support, and help you with any other issues you may have. We strive to provide the best customer service possible and will do our best to ensure that your experience with us is a positive one.</p>
            <p>Thank you for choosing Social Crow and we look forward to helping you with your order.</p>
        </div>
      </div>
    </>
  )
}

export default RequestRefill
