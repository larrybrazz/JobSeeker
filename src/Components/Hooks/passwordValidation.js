import React, { useEffect, useState } from 'react'

export const passwordValidation = ({password = "" , confirmPassword="", requiredLength = 8}) => {
    
    const [length , setLength]= useState(null);
    const [ hasNumber , setHasNumber] = useState(null);
    const [upperCase, setUpperCase] = useState(null);
    const [lowerCase, setLowerCase] = useState(null);
    const [specialChar, setSpecialChar]= useState(null);
    const [match , setMatch] = useState(null);
    const [error, setError]= useState("");


    useEffect(() => {
      setLength(password.length >= 8 ? true : false);
      setUpperCase(password.toLowerCase() !== password);
      setLowerCase(password.toUpperCase() !== password);
      setHasNumber(/\d/.test(password));
      setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password));
      setMatch(password && password === confirmPassword);
        
      }, [password, confirmPassword, requiredLength]);
    
  return [
       length, hasNumber, upperCase , lowerCase, match , specialChar , error
  ]

}
