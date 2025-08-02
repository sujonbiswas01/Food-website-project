import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container'
const Recent = () => {
    const [data,setdata]= useState([]);
    useEffect(()=>{
        fetch("/Recent.json")
          .then((response)=>{
            return response.json()
          })
          .then((response)=>{
            setdata(response)
          })
    })

  return (
    <Container>
        <div className='pt-16 '>
            <div>
                <h2 className="text-[#1E1E1E] text-3xl font-extrabold">
            Recents avtivities
          </h2>
              
          <div className='py-6 flex flex-col md:flex-row gap-11 '>
            
            {
                data.flatMap((items,index)=>{

                  
                    return <div key={index} className='bg-[#F8F8F8] p-6 rounded-2xl'>
                  
                        <div className='flex  gap-6 '>
                            <img src="/images/profile.png" className='object-contain' alt="" />
                            <div className=''>
                                <h3 className='text-[#232323] font-bold text-[21px]' >{items.pro}</h3>
                                <p className='text-[#8A8A8A]'> {items.propara}</p>
                            </div>
                        </div>

                        <div>
                            <div className='flex  py-6 gap-3'>
                                <img src={items.Rating} className=' object-scale-down' alt="" />
                                <p>{items.date}</p>
                            </div>
                            <p className='text-[#5E5E5E] mb-4'>{items.des1}</p>
                            <p className='text-[#5E5E5E] mb-4'>{items.des2}</p>
                        </div>

                        <div className='py-6 flex flex-col md:flex-row gap-3'>
                            <img src={items.img1} alt="" />
                            <img src={items.img2} alt="" />
                            <img src={items.img3} alt="" />
                        </div>
                        <h2 className='text-[#232323] underline font-medium text-[17px]'>{items.link}</h2>
                    </div>
                })
            }


          </div>
          
            </div>
        </div>
    </Container>
  )
}

export default Recent