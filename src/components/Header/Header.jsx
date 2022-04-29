import {React,useState} from 'react'
import Link from "../Header/Styled/NavLink"
import Input from './Styled/Input'
import ProfileLink from './Styled/ProfileLink/profileLink'
import Logo from "../../components/Header/Styled/Logo/logo"
import Bag from './Styled/ProfileLink/bagComponent/Bag'
import { faBagShopping,faHeart,faUser} from '@fortawesome/free-solid-svg-icons'
import  "../Header/Header.css"


export default function Header() {

  const [modalOpen,setModalOpen]=useState(false);


  

  const handleOpen=(e)=>{
    e.preventDefault();
    setModalOpen(true)
  }
  const handleClose=()=>{
    setModalOpen(false)
  }

  return (
    <div className='NavContainer'>
  
      <div className="left-items">
      <Logo className="logo"></Logo>
      <Link>Men</Link>
      <Link>WoMen</Link>
      <Link>Kids</Link>
      <Link>Home & Living</Link>
      <Link>Beauty</Link>
      <Link>Studio</Link>
      </div>

      <div className='right-items'>
          <Input></Input>      
          <ProfileLink icon={faUser} size="2x" iconName="Profile" > </ProfileLink>
          <ProfileLink icon={faHeart} size="2x" iconName="Wishist" > </ProfileLink>
          <button onClick={handleOpen} >
                 <ProfileLink icon={faBagShopping} size="2x" iconName="Bag" > </ProfileLink>
          </button>       
          <Bag modalOpen={modalOpen} handleOpen={handleOpen} handleClose={handleClose}/> 
   
      </div>
    </div>
  )
}
