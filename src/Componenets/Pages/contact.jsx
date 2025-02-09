import React from 'react'
import ContantMain from "../SubComponents/contactMain/contactmain";
import { useEffect } from 'react';
const contact = () => {
   useEffect(() => {
      window.scrollTo(0,0);
      return () => {
        
      }
    }, [])
  return (
    <div>
        <ContantMain/>
    </div>
  )
}

export default contact
