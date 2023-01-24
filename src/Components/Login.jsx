import React, { useEffect, useState } from 'react';
import {useNavigate, useLocation } from 'react-router-dom';


const Login = () => {
    const [error, setError] = useState("");
    const [items , setItems] = useState([])
    const [userData, setUserData] = useState (
        {
            email:"",
            password:"",
        }
    );
    const navigate = useNavigate();
   // const [loggedIn , setLoggedIn] = useState(false)

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('UserInfo'));
        if (item) {
         setItems(item);
        }
      }, []);
    // //const location = useLocation();
    // useEffect(()=>{
    //     if(loggedIn){
    //         navigate('/login')
    //     }
    // },[loggedIn])

     function handleChange(e){
      const {name, value, type} =  e.target
        setUserData((prevUserData)=>{
            return{
                ...prevUserData,
                [name]: value
            }
        })

    }

    function validateLogin (){
       if(items.email === userData.email && items.password === userData.password){
        console.log("all good")
    }

    function handleSubmit (event){
        event.preventDefault()
        validateLogin();
        //setLoggedIn(true)

    }



  return (
    <div className='d-flex login mx-auto' 
    style={{
        backgroundImage:"url(/network.webp)",
        backgroundRepeat: "no-repeat"
    }} >
    
        <div className=''>
        <h3 className=''>Login </h3>
        <form onSubmit={handleSubmit} className='form ' >
           <input
            className='p-2 form-control rounded'
             type="email" 
             name='email'
             placeholder='Email'
             value={userData.email}   
             onChange={handleChange}  
             /> <br />
            {/* <input
            className='p-2 form-control rounded'
             type="password" 
             name='phone'
             placeholder='Password'
             value={userData.phone}   
             onChange={handleChange}  
             /> <br /> */}
        <input
        className='p-2 form-control rounded'
         type="password" 
         name='password'
         placeholder='password'
         value={userData.password}   
         onChange={handleChange}  
         />
         <br/>
             <button  className='btn btn-success form-control'> Submit </button>
        </form>
        </div>
    </div>
  )
}
}
export default Login