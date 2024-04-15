import React, { useRef, useState } from 'react'
import navListData from '../data/navListData'
import NavListItem from '../components/NavListItem'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import './header.css'

function Header() {
  const [selectedTag, setSelectedTag] = useState(navListData);
  const navRef = useRef();

  const activateTag = (id) => {
    setSelectedTag(prevTags => prevTags.map(tag => {
      if (tag.id === id) {
        return {...tag, active: true}
      } else {
        return {...tag, active: false}
      }
    }))
  }

  const showNavBar = () => {

    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className='header-container'>
        <a href='/' className='logo'>kiska.</a>
        <ul className='nav' ref={navRef}>
            {selectedTag.map(nav => {
               return <NavListItem activateTag={activateTag}  key={nav.id} nav={nav}/>
            })}
            <button onClick={showNavBar} className='nav-btn nav-close-button'>
               <IoMdClose  />
            </button>
        </ul>
        <button onClick={showNavBar} className='nav-btn'>
            <RxHamburgerMenu />
        </button>
        <div className="switchLanguages">
          <a href='/'>EN</a>
          |
          <a href='/'>中文</a>
        </div>
    </header>
  )
}

export default Header
