import React from 'react'
import LoveCard from '../molecules/LoveCard'

const Mnorangan = () => {
    let arr = [
        {
            img:"/img/mnoranjan1.png"
        },
        {
            img:"/img/mnoranjan1.png"
        },
        {
            img:"/img/mnoranjan1.png"
        },
        {
            img:"/img/mnoranjan1.png"
        },
        {
            img:"/img/mnoranjan1.png"
        },
        {
            img:"/img/mnoranjan1.png"
        },
        {
            img:"/img/mnoranjan1.png"
        },
    ]
  return (
    <div className='ml-17 mt-10'>
    <div className='flex mb-2 mr-15 justify-between'>
    <h1 className='text-3xl font-bold'>मनोरंजन कहानियाँ</h1>
    <p>Our Dekhe</p>
    </div>
     <div className="flex gap-4">
            {
                arr.map((item, i) => {
                    return (<LoveCard 
                        key={i}     
                        img={item?.img} 
                    />)
                })
            }
            </div>
    </div>
  )
}

export default Mnorangan
