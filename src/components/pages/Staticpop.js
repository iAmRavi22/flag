// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
import ReactModal from 'react-modal-resizable-draggable';
// or less ideally

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



function Staticpop(props) {

  const closeModal=()=>{
    props.setFollowPopup(false)
  }
  return (

    <ReactModal
    initWidth={800} 
    initHeight={400} 
    //onAfterOpen={afterOpenModal}
    // onFocus={() => console.log("Modal is clicked")}
    className={"my-modal-custom-class pop-card"}
    onRequestClose={closeModal} 
    isOpen={props.followPopup}
    style={customStyles}>
  <div className='order'>
    <h4>Join the flock</h4>
     <p>You can join our flock of followers and earn just by following Twitter users</p>
    </div>
    <div className='Input icon-card'>
      <input type='Email' placeholder='Email'/>
      <div class="svg-icons-pop"><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg></div>
    </div>
    <button className='mail-btn' type='submit'>Request to join</button>
    </ReactModal>










    // <div
    //   className="modal show"
    //   style={{ display: 'block', position: 'initial', marginTop:'20%' }}
    // >
    //   <Modal.Dialog>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Join the flock</Modal.Title>
          
    //     </Modal.Header>
    //     <Form.Text id="passwordHelpBlock" muted>
    //     You can join our flock of followers and earn just by following twitter user.
    //   </Form.Text>

    //     <Modal.Body>
    //     <Form.Control type="text" placeholder='Email' />
    //     </Modal.Body>

    //     <Modal.Footer>
    //       <Button variant="secondary">Request to join</Button>
          
    //     </Modal.Footer>
    //   </Modal.Dialog>
    // </div>
  );
}

export default Staticpop;