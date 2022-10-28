import React from 'react';
import {Link} from 'react-router-dom';
import instagram from "./assets/instagram.png"
import twitter from "./assets/twitter.png"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'purple' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Evaluate.Work.improve        </span>
            <Link to="#"><img src={instagram} style={{height:"25px"}}/></Link>
            <Link to="#"><img src={twitter} style={{height:"25px"}}/></Link>
            {/* <MDBBtn type='button' outline color="light" rounded>
              Sign up!
            </MDBBtn> */}
          </p>
        </section>
      </MDBContainer>


      <div id="text-center p-3"className='text-center p-3' style={{ backgroundColor: 'purple(0, 0, 0, 0.2)' }}>
      your result-your way
        {/* <a className='text-white' href='https://mdbootstrap.com/'>
          your result-your way
        </a> */}
      </div>
    </MDBFooter>
  );
}