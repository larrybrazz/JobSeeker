import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const footerList = [
    {content:'About'},
    {content:'Companies Hiring'},
    {content:'Privacy Policy'},
    {content:'Terms'},
    {content:'CV Reviews Services'},
    {content:'Soft Skill training'},
    {content:'Skill Assessments'},
    {content:'Banner Rates Cards'}
  ];


  const footerLinks = footerList.map((list, i)=>{
       return <NavLink key={i} className='col-md col-16 link'> {list.content}</NavLink>
  })
  return (
    <div className=''>
      <div className='row footer text-center'>
        {footerLinks}
      </div>
      <div className='text-center bg-success'>
        <p style={{fontSize:"20px", color:"#fff", fontWeight:"20px"}}>Socials</p>
        <div className='py-3'>
        <span><i className='bi bi-twitter me-4 text-primary'></i></span>
        <span><i className='bi bi-facebook  me-4 text-primary'></i></span>
        <span><i className='bi bi-instagram  me-4 text-danger'></i></span>
        <span><i className='bi bi-tiktok text-danger'></i></span>
        <span><i className='bi bi-snapchat text-secondary'></i></span>
        </div>
      </div>
      <div className='text-center p-2 bg-dark text-light'> &copy; LarryBrazz 2022</div>
    </div>
  )
}

export default Footer
