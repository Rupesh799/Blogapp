"use client"
import React, { useContext } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { ThemeContext } from '../context/ThemeContext'

const Theme = () => {

  const {theme, toggle} = useContext(ThemeContext)
  console.log(theme);
  
  return (
    <div className='relative flex rounded-xl w-12 h-6 items-center cursor-pointer bg-black justify-between' onClick={toggle}
    style={
      theme === "dark" ?
      { backgroundColor:"white"}
      :{ backgroundColor:"#0f172a"}
    }
    >
        <BiMoon color='white' />
        <div className='rounded-full h-5 w-5 bg-red-500 absolute'
        style={
          theme ==="dark" ? {left:1,backgroundColor:"#0f172a"}
          :{right:1, backgroundColor:"white"}
        }
        ></div>
        <BiSun color='yellow'/>
    </div>
  )
}

export default Theme