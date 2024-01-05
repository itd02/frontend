import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = {"firstName":firstName, 
                 "lastName":lastName, "email":email, "password":password};
    console.log(formData)
    axios({
      // Endpoint to send files
      url: "http://18.212.205.223:5000/api/signup",
      method: "POST",
      headers: {
          authorization: "your token comes here",
      },

      

      data: formData,
  })
      // Handle the response from backend here
      .then((res) => {alert(res.data.message)})

      // Catch errors if any
      .catch((err) => {alert(err.response.data.message)});
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-5 mb-4">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">Register</h1>
              <input className="form-control mt-2"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <input className="form-control mt-2"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              <input className="form-control mt-2"
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input className="form-control mt-2"
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <button className="btn btn-sm btn-success rounded-pill px-5 mt-4 ms-4 float-end" type="submit">Register</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
