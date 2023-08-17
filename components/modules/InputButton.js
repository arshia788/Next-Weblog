import React from 'react'

function InputButton({value, label, changeHandler, name, type}) {
  return (
    <div className='flex flex-col mb-4'>
        <label className='mb-2 text-gray-500' htmlFor={label}>{label}</label>

        <input value={value} id={label} onChange={changeHandler} name={name} type={type}
        className='shadow-sm shadow-gray-500 rounded-sm outline-none p-1
        focus:border focus:border-blue-700'
        />
    </div>
  )
}

export default InputButton