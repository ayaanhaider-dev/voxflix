import React from 'react'
import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
import MobileFooter from './Layouts/MobileFooter'

  function Layouts({children}) {
  return (
    <>
     <div className="bg-main text-white">
      <Navbar />
      {children}
      <Footer /> 
      <MobileFooter />
      </div> 
    </>
  )
}

export default Layouts
