import React from 'react'

const Footer = () => {

    const descriptionA = ['About MyFeedback','Investor Relations']
    const descriptionB = ['MyFeedback for business','Collections','Talk','Events','MyFeedback blog','Support','Developers']
    const footer=(title,description)=>{
        return <div>
            <h2 className='font-bold text-3xl'>{title}</h2>
            <div className='space-y-2 pt-3'>
                {description && description.map((items,index)=>{
                    return <p key={index}>
                        {items}
                    </p>
                })}
            </div>

        </div>

    }
  return (
    <footer className="px-14 flex flex-col md:flex-row justify-center  md:justify-around py-16">
      <div>{footer("About", descriptionA)}</div>
      <div>{footer("MyFeedback", descriptionB)}</div>
      <div>
        <div>
          {footer("Languages")}
          <div>
            <select name="" id="">
              <option value="">English</option>
            </select>
          </div>
        </div>
        <div>
          {footer("Countries")}
          <div>
            <select name="" id="">
              <option value="">Singapour</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer