import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  console.log(loggedIn)
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("userInfo"));
    if (item) {
      setItems(item);
    }
  }, []);

  const sessionStr = () => {
    sessionStorage.setItem("loginDetails", JSON.stringify(userData));
  };
  function handleChange(e) {
    const { name, value, type } = e.target;
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  }

  function validateLogin() {
    if (
      items.email === userData.email &&
      items.password === userData.password
    ) {
      navigate("/");
    } else {
      setError("Kindly Input your details registered with us. Thank You!");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    validateLogin();
    sessionStr();
    setLoggedIn(true);
  }

  return (
    <div
      className="d-flex login mx-auto"
      style={{
        backgroundImage: "url(/network.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <p className="text-danger"> {error} </p>
        <h3 className="">Login </h3>
        <form onSubmit={handleSubmit} className="form ">
          <input
            className="p-2 form-control rounded"
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />{" "}
          <br />
          {/* <input
            className='p-2 form-control rounded'
             type="password" 
             name='phone'
             placeholder='Password'
             value={userData.phone}   
             onChange={handleChange}  
             /> <br /> */}
          <input
            className="p-2 form-control rounded"
            type="password"
            name="password"
            placeholder="password"
            value={userData.password}
            onChange={handleChange}
          />
          <br />
          <button className="btn btn-success form-control"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
