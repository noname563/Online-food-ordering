import React, { useState } from "react";
import { Link, json,useNavigate } from "react-router-dom";

export default function Login() {

  const navigate =useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });
  const [successstatus,setsuccessstatus]=useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: details.password,
        email: details.email,
      }),
    });
    const resJson = await response.json();
    console.log(resJson);

    
    if (resJson.success) {
      localStorage.setItem("authToken",json.authToken);
      setsuccessstatus("true");
      navigate("/Home")
    } else{
      setsuccessstatus("false");
    }

  };

  const onChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  return (
    <>
    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:"20px"  }}>
    <h1 className=''>LOGIN</h1>
    </div>
    <div className="container" style={{ maxWidth: "500px" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={details.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
            onChange={onChange}
          />
        </div>

        <button type="submit" className="m-3 btn btn-primary">
          Submit
        </button>
        <Link to="/SignUp" className="m-3 btn btn-warning">
          Create new user!
        </Link>
      </form>
       <div>
        {successstatus === "true" ? (<div>LOGIN SUCCESSFUL!</div>) : successstatus === "false" ? (<div>INCORRECT EMAIL OR PASSWORD</div>): ("")}
       </div>
    </div>
    </>
  );
}
