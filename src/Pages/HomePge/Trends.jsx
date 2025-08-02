import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container'

const Trends = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('/Trends.json')
         .then((response)=>{
            return response.json()
         })
         .then((response)=>{
            setdata(response)
         })

    })
  return (
    <Container className="pt-20">
        <h2 className='text-[#1E1E1E] text-3xl font-bold mb-6'>The latest trends</h2>
        <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-5 bg-[#F8F8F8]'>
           {data.map((items,index)=>(
            <div key={index} className='mx-auto'>
                <img src={items.image} alt="" />
                <div className='px-2 space-y-3 pt-3'>
                    <h2 className='font-semibold text-2xl text-[#232323] leading-[100%]'>{items.headding}</h2>
                    <p className='text-[#8F8F8F] max-w-[280px]'>{items.des}</p>
                    <div className='flex gap-2'>
                        <img src={items.img} alt="" />
                        <p className='max-w-[280px] mx-auto'>{items.Rating}</p>
                    </div>
                </div>

            </div>
           ))}
        </div>
    </Container>
  )
}

export default Trends