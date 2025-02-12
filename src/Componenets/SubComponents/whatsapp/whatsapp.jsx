import React from 'react'
import "./whatsapp.css"
const whatsapp = () => {
  return (
    <div>
      <a className="bi bi-whatsapp wa-icon transition-all" href={import.meta.env.VITE_WHATSAPP_LINK} target='_blank'></a>
    </div>
  )
}

export default whatsapp
