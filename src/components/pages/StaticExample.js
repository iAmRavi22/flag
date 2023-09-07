
import { useState } from 'react';
import ReactModal from 'react-modal-resizable-draggable';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



function StaticExample(props) {

  const closeModal=()=>{
    props.setOrderPopup(false)
  }

  const [input, setInput] = useState("");

  const handleTrackOrder = (e)=>{
    if(input){
        window.location.reload();
    }
  }
  
  return (
    <ReactModal
      className={"my-modal-custom-class pop-card"}
      onRequestClose={closeModal} 
      isOpen={props.orderPopup}
      style={customStyles}>
    <div className='order'>
      <h4>Track your order</h4>
       <p>Check the progress status of your order and request a follower refil</p>
      </div>
      <div className='Input icon-card'>
        <input  placeholder='Order number' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <div class="svg-icons-pop"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path></svg></div>
      </div>
      
      <button type='submit' onClick={handleTrackOrder}>TracK Order</button>
      </ReactModal>











    
  );
}

export default StaticExample;