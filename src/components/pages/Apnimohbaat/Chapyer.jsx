import LoveCard from '@/components/molecules/LoveCard'
import React from 'react'


const Chapyer = () => {
    let arr = [
        {
            img:"/img/story1.png"
        },
        {
            img:"/img/story1.png"
        },
        {
            img:"/img/story1.png"
        },
        {
            img:"/img/story1.png"
        },
        {
            img:"/img/story1.png"
        },
        {
            img:"/img/story1.png"
        },
        {
            img:"/img/story1.png"
        },
    ]
  return (
    <div className='ml-17 mt-10'>
    <div className='flex mb-2 mr-15 justify-between'>
    <h1 className='text-3xl font-bold'>Chapter</h1>
    
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

export default Chapyer
