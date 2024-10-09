import React from 'react'

function Button({btnText}) {
  return (
    <div className='btn-container p-4 rounded-xl bg-black text-white'>{btnText}</div>
  )
}

export default Button