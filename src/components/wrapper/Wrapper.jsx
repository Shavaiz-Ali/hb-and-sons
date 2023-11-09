import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`w-full max-w-[1280px] sm:px-5 px-2 mx-auto ${className || ""}`}>
      {children}
    </div>
  )
}

export default Wrapper;