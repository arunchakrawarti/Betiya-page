import React from 'react'
import LoveCard from '../molecules/LoveCard'

const LoveStory = () => {
    let arr = [
        {
            img:"/img/love1.png"
        },
        {
            img:"/img/love1.png"
        },
        {
            img:"/img/love1.png"
        },
        {
            img:"/img/love1.png"
        },
        {
            img:"/img/love1.png"
        },
        {
            img:"/img/love1.png"
        },
        {
            img:"/img/love1.png"
        },
    ]
  return (
    <div className='ml-17 mt-10'>
    <div className='flex mb-2 mr-15 justify-between'>
    <h1 className='text-3xl font-bold'>लव स्टोरी</h1>
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

export default LoveStory
