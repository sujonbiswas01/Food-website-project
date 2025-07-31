import React from 'react'
import Container from '../../Components/Container'

const Carousel = ({title,des,image,ratingTitle,image1,rating}) => {
  return (
    <section className="bg-white  pb-4 rounded-[10px]">
        <div>
            <div className=''>
                <img src={image1} className='w-full' alt="" />
                <div className='px-6'>
                    <h2>{title}</h2>
                    <p className='text-[#8F8F8F] text-sm max-w-[234px]'>{des}</p>
                    <div className='pt-4 flex gap-1'>
                        <img className='object-contain' src={image} alt="" />
                        <div className='flex gap-2 '>
                            <p>{rating}</p>
                             <p className='text-[#7A7A7A]'>{ratingTitle}</p>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>


    </section>
  )
}

export default Carousel