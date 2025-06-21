"use client"

import React, { useContext ,useState, useEffect} from 'react'
import { ThemeContext } from '../context/ThemeContext'


//chilkdren is wrapper here with context api
const ThemeProvider = ({children}) => {
    const {theme} = useContext(ThemeContext)

    const [mounted , setMounted] = useState(false)

    useEffect(()=>{
      setMounted(true)
    },[])

    if(mounted){
      return (
        <div className={theme}>{children}</div>
      )
    }
  
}

export default ThemeProvider