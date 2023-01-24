import React from 'react';
import { passwordValidation } from './passwordValidation';

const PasswordInfo = ({length, 
    hasNumber, 
    upperCase , 
    lowerCase, 
    match , 
    specialChar,}) => {
  return (
    <div>
    <ul>
    <li>
      Length greater than 8: {length ? <span>True</span> : <span>False</span>}
    </li>
    <li>
      Has a Number: {hasNumber ? <span>True</span> : <span>False</span>}
    </li>
    <li>
      UpperCase: {upperCase ? <span>True</span> : <span>False</span>}
    </li>
    <li>
      LowerCase: {lowerCase ? <span>True</span> : <span>False</span>}
    </li>
    <li>Match: {match ? <span>True</span> : <span>False</span>}</li>
    <li>
      Special Character:{" "}
      {specialChar ? <span>True</span> : <span>False</span>}
    </li>
 </ul>
 </div>
  )
}

export default PasswordInfo