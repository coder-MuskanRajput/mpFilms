import React from 'react'

const NewWhyChooseUs = () => {
    const listData = [
        'All team has worked before in Mumbai film industry',
        'Able to give pre production to post production services',
        'Perfect planning & execution during the shoot',
        'Cost effective',
        'Quality content',
        'On time delivery',
        'Working transparency'
    ]
  return (
    <div className='flex gap-6 p-12 flex-col items-center bg-[#D8BD76]'>
<h1 className='text-7xl font-bold text-red-500 uppercase'>{'WHY CHOOSE US?'.split("").map((child, idx) => (
        <span className='hoverText' key={idx}>
          {child}
        </span>
      ))}
            </h1>
    <div className='flex gap-4 flex-wrap w-full justify-center'>
        {listData.map((item, index)=>{
            return (
<div className='w-full max-w-[350px]  relative'>
            <h1 className='text-[150px] font-extrabold text text-white opacity-20 text-center'>{index + 1}</h1>
            <p className='text-[#101010] opacity-90 text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center'>{item}</p>
        </div>
            )
        })}
        
    </div>
    </div>
  )
}

export default NewWhyChooseUs