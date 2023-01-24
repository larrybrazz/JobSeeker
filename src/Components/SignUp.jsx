import React, { useState } from "react";
import { useNavigate } from "react-router";
import { passwordValidation } from "./Hooks/passwordValidation";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import PasswordInfo from "./Hooks/PasswordInfo";
import { useEffect } from "react";

const SignUp = () => {
  const [passwordFilled, setPasswordFilled] = useState(false);
  const [formFilled , setFormFilled] = useState(false)
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    isFriendly: true,
    employment: "",
    gender: "",
  });

  const [length, hasNumber, upperCase, lowerCase, match, specialChar] =
    passwordValidation({
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      requiredLength: 10,
    });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const localStr = () => {
    localStorage.setItem("userInfo", JSON.stringify(formData));
  };

  // function validateFormData() {
  //    let errors = {};
  //   if (formData["firstName"] && formData["lastName"] && formData["email"] && formData["phone"].length != 10 && formData["password"] && formData["confirmPassword"] && formData["birthDate"] && formData["employment"]){
  //     console.log("all good")
  //   } else (
  //     console.log("Not good")
  //     )
  // }


  function validate() {
    let errors = {};

    if (!formData["firstName"]) {
      errors["firstName"] = "Please enter your first name";
    }

    if (!formData["lastName"]) {
      errors["lastName"] = "Please enter your last name";
    }

    if (!formData["email"]) {
      errors["email"] = "Please enter your email";
    }

    if (typeof formData["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(formData["phone"])) {
        errors["phone"] = "Please enter only number.";
      } else if (formData["phone"].length != 10) {
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    if (!formData["password"]) {
      errors["password"] = "Please enter your password.";
    }

    if (!formData["confirmPassword"]) {
      errors["confirmPassword"] = "Password must match.";
    }
    if (!formData["birthDate"]) {
      errors["birthDate"] = "Date of birth.";
    }
    if (!formData["employment"]) {
      errors["employment"] = "Employment status.";
    }

    if (formData["firstName"] && formData["lastName"] && formData["email"] && formData["password"] && formData["confirmPassword"] && formData["birthDate"] && formData["employment"]) {
      setFormFilled(true)
      console.log("filled")
    } else {
      console.log("Not filled")
    }

    if (
      length &&
      hasNumber &&
      upperCase &&
      lowerCase &&
      match &&
      specialChar === true
    ) {
      setPasswordFilled(true);
      console.log("Okay");
    } else {
      console.log(" not okay");
      errors["password"] = "Kindly follow the input instructions below";
    }
    setErrors(errors);
  };


  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      console.log("correct")
      validate()
      localStr();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        birthDate: "",
        comments: "",
        isFriendly: true,
        employment: "",
        gender: "",
      });
      navigate("/signin");
    } 

    
  }

  return (
    <div
      className="d-flex SignUp mx-auto mt-5"
      style={{
        backgroundImage: "url(/simple-white.webp)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <div className="my-4 signupHeader">
          <h3> SIGN UP</h3>
          <p>Sign up for free</p>
        </div>
        <form onSubmit={handleSubmit} className="form ">
          <div className="text-danger">{errors["firstName"]}</div>
          <input
            className="p-2 form-control rounded "
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br />
          <div className="text-danger">{errors["lastName"]}</div>
          <input
            className="p-2 form-control rounded"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />{" "}
          <br />
          <div className="text-danger">{errors["email"]}</div>
          <input
            className="p-2 form-control rounded"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />{" "}
          <br />
          <div className="text-danger">{errors["phone"]}</div>
          <input
            className="p-2 form-control rounded"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />{" "}
          <br />
          <div className="text-danger">{errors["password"]}</div>
          <input
            className="p-2 form-control rounded"
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <div className="text-danger">{errors["confirmPassword"]}</div>
          <input
            className="p-2 form-control rounded"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <PasswordInfo
            length={length}
            hasNumber={hasNumber}
            upperCase={upperCase}
            lowerCase={lowerCase}
            match={match}
            specialChar={specialChar}
          />
          <br />
          <input
            className="p-2 form-control rounded"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          <fieldset>
            <legend>Current Employement Status</legend>
            <input
              type="radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              checked={formData.employment === "unemployed"}
              onChange={handleChange}
            />
            <label htmlFor="unemployed"> Unemployed</label> <br />
            <input
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              checked={formData.employment === "part-time"}
              onChange={handleChange}
            />
            <label htmlFor="part-time"> Part-time</label> <br />
            <input
              type="radio"
              id="full-time"
              name="employment"
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
            className="text-black"
            name="gender"
            id=""
            onChange={handleChange}
            value={formData.gender}
          >
            <option value="red"> Male</option>
            <option value="orange"> Female</option>
            <option value="yellow"> Dont want to disclose</option>
          </select>
          <br />
          <br />
          <button
            type="submit"
            className="form-control btn  bg-success text-light"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
