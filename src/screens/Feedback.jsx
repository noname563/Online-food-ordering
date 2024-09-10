import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap';

export default function Feedback() {
  return (
    <div>
      <Navbar></Navbar>
      
        <div style={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }} className='text-center'>
          <h1 className=''>FeedBack</h1>
          </div>
          <div className="container " style={{ maxWidth: "500px",height:"400px" }}>
           
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Feedback
          </label> 
          <textarea
            type="textarea"
            className="form-control"

          />
        </div>

        <button type="submit" className="m-3 btn btn-primary">
          Submit
        </button>
        <button type="button" className="m-3 btn btn-danger">
        Cancel
        </button>
      </form>
      
    </div>
        
    
      <Footer></Footer>
</div>
  )
}
