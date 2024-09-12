import React, { useState } from "react"
 
const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]")
  const navLinks = ["Home","About", "Contact", "Images"]

  const onOpen = () =>{
    setHideLeft("left-0");
  }
  const onClose = () =>{
    setHideLeft("-left-[1000px]");
  }
  return (
    <>
    <div className='max-[900px]:hidden'>Desktop</div>
    <div className='min-[900px]:hidden'>MobileView</div>
    </>
  )
}

export default Header
