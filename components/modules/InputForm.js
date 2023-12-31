import React from 'react'

function InputForm({value, label, changeHandler, name, type}) {
  return (
    <div className='flex flex-col mb-4'>
        <label className='mb-2 text-gray-500' htmlFor={label}>{label}</label>

        <input value={value} id={label} onChange={changeHandler} name={name} type={type}
        className='border outline-none border-blue-700 px-3 py-1 rounded-sm'
        />
    </div>
  )
}

export default InputForm