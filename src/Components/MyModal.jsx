import React, { useState } from 'react'

const MyModal = () => {
  const [isOpen,setisopen]=useState(false)
  const HandleClick=()=>{
    setisopen(true)
  }
  const closeBtn=()=>{
    setisopen(false)
  }
  return (
    <div className='sm:opacity-0 sm:hidden'>
      <button className='mt-4' onClick={HandleClick}>MyFeedback </button>

      {isOpen && (
        <div className='sm:opacity-0 sm:hidden opacity-100 h-screen w-[100%] fixed top-0 left-0 transition-all duration-300 delay-150 bg-white sm:bg-black '>
          <p onClick={closeBtn} className='flex justify-end mt-4 mr-4 cursor-pointer '>
            close
          </p>
          <div>
            <div >
              <p className='px-10 py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi nemo laborum autem molestias? Autem assumenda, sequi voluptates, molestias ab officiis illo rem quam quaerat reiciendis mollitia expedita cumque voluptatibus ex, ipsum eum aspernatur laudantium ullam recusandae. Itaque nobis sed officiis, sunt culpa id facere labore laborum laudantium, doloremque aut tempore quibusdam molestias provident dignissimos vel. Nemo quaerat pariatur, fugiat ad consectetur facere alias esse quos. Fuga id alias libero distinctio totam, natus sequi unde quod, modi tenetur suscipit dolores animi expedita ipsum obcaecati est perferendis repudiandae ipsa! Labore, repellendus beatae vel perspiciatis officiis voluptatem quaerat quae eum consequuntur cum? Eum.</p>
            </div>            
          </div>
          
        </div>
      )}
    </div>
  )
}

export default MyModal