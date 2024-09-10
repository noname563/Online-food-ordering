import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useState } from 'react'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';


export default function Navbar() {

  const [cartView, setCartView] = useState(false)
  const navigate =useNavigate();
  const handlelogout= ()=>{
    localStorage.removeItem("authToken");
    navigate("/Login")

  }
  const loadCart= ()=>{
    setCartView(true)
}

const data = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      <div className="container-fluid">
        <b>
          <Link className="navbar-brand fs-2 fst-italic text-warning" to="/Home">
            GOFOOD
          </Link>
        </b>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/AboutUs">
               About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/FeedBack">
              Feedback
              </Link>
            </li>
            {/* {(localStorage.getItem("authToken"))? 
            <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/">
              My orders
            </Link>
            </li>
            : ""} */}
          </ul>
          {(!localStorage.getItem("authToken"))? 

          <div className="d-flex">
                <Link className="btn bg-warning text-primary mx-1" to="/Login">
                  Login
                </Link>           
                <Link className="btn bg-warning text-primary mx-1" to="/SignUp">
                  Sign Up
                </Link>
          </div>
          :
          <div>
                <div className="btn bg-warning text-primary mx-1" onClick={(loadCart)}>
                <Badge pill bg="danger"  >
                 {data.length}
                </Badge>
                  MyCart
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                 <div className="btn bg-warning text-danger mx-1 " onClick={(handlelogout)}>
                  Logout
                </div>
          </div>
   
          }
        </div>
      </div>
    </nav>
  );
}
