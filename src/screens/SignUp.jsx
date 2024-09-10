import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";

export default function SignUp() {

  const navigate =useNavigate();
  const [details, setdetails] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const [successstatus,setsuccessstatus]=useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const resopnse = await fetch("http://localhost:5000/api/createuser", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        password: details.password,
        email: details.email,
        location: details.location,
      }),
    });
    const resjson = await resopnse.json();
    console.log(resjson);

    if (resjson.success) {
      navigate("/Login")
      setsuccessstatus("true");
    } else{
      setsuccessstatus("false");
    }
  };
  const onchange = (event) => {
    setdetails({ ...details, [event.target.name]: event.target.value });
  };
  return (
    <>
    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:"20px" }}>
    <h1 className=''>SIGN UP</h1>
    </div>
      <div className="container" style={{maxWidth:"500px  "}}>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={details.name}
              onChange={onchange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={details.password}
              onChange={onchange}
            />
            <div id="emailHelp" className="form-text">
              Minimum Password length should be 5.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={details.email}
              onChange={onchange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="t" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={details.location}
              onChange={onchange}
            />
          </div>
      
          
          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-warning">
            Already a user!
          </Link>
        </form>
        <div>
        {successstatus === "true" ? (<div>NEW USER REGISTERED</div>) : successstatus === "false" ? (<div>SOMTING WENT WRONG.</div>): ("")}
       </div>
      </div>
    </>
  );
}
