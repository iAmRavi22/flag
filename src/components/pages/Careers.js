import React from 'react'

const Careers = () => {
  return (
    <>
     <div className='container new'>
        <div className='career_heading'>
            <h2>Careers</h2>
            <p>We are always looking for new talent at Social Crow so check out our open 
            positions and get in contact if you think you could become the next team member to join us.</p>
        </div>
        <div className='careers_work'>
            <h3>Remote Work</h3>
            <ul>
                <li>Backend developer</li>
                <li>Frontend developer</li>
                <li>Graphic designer</li>
            </ul>
        </div>
        <div className='careers_work'>
            <h3>San Francisco office</h3>
            <ul>
                <li>Product manager</li>
                <li>Sales manager</li>
                <li>Business development manager</li>
            </ul>
        </div><br/>
        <p>Send your resume to careers@socialcrow.co</p>
        </div> 
    </>
  )
}

export default Careers
