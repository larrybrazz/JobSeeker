import React from 'react'
import PasswordInfo from './PasswordInfo'

const SignUpInputs = ({handleSubmit, errors, formData, setFormData,handleChange}) => {
  return (
    <div className='d-flex SignUp mx-auto' >
        <div className=''>
        <div className='my-4 signupHeader'>
        <h3 > SIGN UP</h3>
        <p>Sign up for free</p>
        </div>
        <form onSubmit={handleSubmit} className='form ' action="">
            <div className='text-danger'>{errors["firstName"]}</div>
            <input
            className='p-2 form-control rounded '
             type="text" 
             name='firstName'
             placeholder='First Name'
             value={formData.firstName}   
             onChange={handleChange}  
             /> 
             <br />
            <div className='text-danger'>{errors["lastName"]}</div>
            <input
            className='p-2 form-control rounded'
             type="text" 
             name='lastName'
             placeholder='Last Name'
             value={formData.lastName}   
             onChange={handleChange}  
             />  <br />
            <div className='text-danger'>{errors["email"]}</div>
            <input
            className='p-2 form-control rounded'
             type="email" 
             name='email'
             placeholder='Email'
             value={formData.email}   
             onChange={handleChange}  
             /> <br />
             <div className='text-danger'>{errors["phone"]}</div>
            <input
            className='p-2 form-control rounded'
             type="tel" 
             name='phone'
             placeholder='Phone Number'
             value={formData.phone}   
             onChange={handleChange}  
             /> <br />
            <div className='text-danger'>{ errors["password"]}</div>
            <input
            className='p-2 form-control rounded'
             type="password" 
             name='password'
             placeholder='password'
             value={formData.password}   
             onChange={handleChange}  
             />
           
            <br />
            <div className='text-danger'>{ errors["confirmPassword"]}</div>
            <input
            className='p-2 form-control rounded'
             type="password" 
             name='confirmPassword'
             placeholder='Confirm Password'
             value={formData.confirmPassword}   
             onChange={handleChange}  
             /> 
            <PasswordInfo/>
            <br />
            <input
            className='p-2 form-control rounded'
             type="date" 
             name='birthDate'
             value={formData.birthDate}   
             onChange={handleChange}  
             /> <br />
             <textarea
             className='p-2 form-control rounded'
             value={formData.comments}
             onChange={handleChange}
             placeholder="Comments"
             name='comments'
             /> <br />
            <input
            className='p-2  rounded'
             type="checkbox" 
             name='isFriendly'
             id='isFriendly'
             checked={formData.isFriendly}   
             onChange={handleChange}  
             />
             <label htmlFor="isFriendly"> Are you friendly </label> <br /> <br />
             <fieldset>
                <legend>Current Employement Status</legend>
                <input type="radio" 
                       id='unemployed'
                       name='employment'
                       value="unemployed"
                       checked={formData.employment === "unemployed"}
                       onChange={handleChange}       
                />
                <label htmlFor="unemployed"> Unemployed</label> <br />

                <input 
                       type="radio"
                       id='part-time'
                       name='employment'
                       value="part-time"
                       checked={formData.employment === "part-time"}
                       onChange={handleChange}
                       />
                <label htmlFor="part-time"> Part-time</label> <br />
                <input 
                       type="radio"
                       id='full-time'
                       name='employment'
                       value="full-time"
                       checked={formData.employment === "full-time"}
                       onChange={handleChange}
                       />
                <label htmlFor="full-time"> Full-time</label> <br />

             </fieldset>
             <br />
             <label htmlFor="favColor"> What is your gender ? </label>
             <br />
             <select 
                    className='text-black'
                    name="favColor" 
                    id=""
                    onChange={handleChange}
                    value={formData.favColor}>
                    
                    <option value="red"> Male</option>
                    <option value="orange"> Female</option>
                    <option value="yellow"> Dont want to disclose</option>

             </select>
             <br />
             <br />
             <button  className=''> Submit </button>
        </form>
        </div>
    </div>
  )
}

export default SignUpInputs