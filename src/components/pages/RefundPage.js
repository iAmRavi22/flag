import React from 'react'
import '../pages/page.css';


const RefundPage = () => {
  return (
    <>
    <div className='refund_container'>
        <div className='refund_heading'>
            <h1>Refund & Delivery</h1>
        </div>
        <div className='refund_section'>
            <h3>Refunds</h3>
            <p>If you're not satisfied with our services, you can request a full refund within 30 days of your purchase. Refunds will be processed through our customer support agents. Refunds aren't available for free credits or services. We reserve the right to meet customer satisfaction, and all refunds must be processed in due diligence and due process.</p>
        </div>
        <div className='refund_section'>
            <h3>30 Day Refill</h3>
            <p>We offer a free 30-day refill on all orders. After ordering, you are entitled to receive a refill for any service that has not been fully completed or has seen a drop in order quantity. We cannot fully control the actions of our users, so drops can happen related to all of our services. If you want to request a refill, please contact our support team via the email in the footer of the website or use our automatic refill service on our customer support page.</p>
        </div>
        <div className='refund_section'>
            <h3>Delivery & Fulfilment</h3>
            <p>Since all of our goods are digital, there is no physical shipping involved. Upon successful payment, your order will be processed and fulfilled as soon as possible. This usually occurs within a few hours but can take as long as five days. If your order has not been completed within two days, please contact our support team via email and a customer support agent will look into the delay.</p>
        </div>
    </div>
      
    </>
  )
}

export default RefundPage
