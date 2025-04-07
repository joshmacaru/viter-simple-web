import React from 'react'


const Button = ({ buttonText, buttonFunction }) => {
  return (
    <button onClick={() => {
        buttonFunction();
    }} className='border-2 py-2 px-4 rounded-md hover:bg-green-500 text-white transition-all ease-in-out bg-green-700'>{buttonText}</button>
  )
}

export default Button