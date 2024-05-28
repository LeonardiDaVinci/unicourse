import React, { useState } from 'react'

const Dropdown = ({heading, subCategories, callbackFn}) => {
    const [toggle, setToggle] =useState(false);
    const handleToggle = () =>{
        setToggle(!toggle)
    }
  return (
    <div className='flex flex-col'>
        <div onClick={handleToggle} className='flex justify-between'>
            <p className='font-medium'>{heading}</p>
            <div>{'>'}</div>
        </div>
        <div className={`${toggle ? "visible" : 'hidden'} font-inter font-light mb-1 pl-4`}>
        {subCategories?.map((categories, i)=>{
            return(
                <div className='mb-1' key={i} onClick={()=>{callbackFn(categories)}}>
                    {categories}
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Dropdown
