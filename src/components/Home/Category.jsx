import React from 'react'
import Card from '../molecules/Card'

const Category = () => {
    let arr = [
        {
         img:"/img/cate1.png"
        },
        {
         img:"/img/cate2.png"
        },
        {
         img:"/img/cate3.png"
        },
        {
         img:"/img/cate4.png"
        },
       
    ]
  return (
    <div className='ml-17 mt-10'>
    <div className='flex mb-2 mr-15 justify-between'>
    <h1 className='text-3xl font-bold'>Category</h1>
    <p>Our Dekhe</p>
    </div>
     <div className="flex gap-4">
            {
                arr.map((item, i) => {
                    return <Card 
                        key={i}     
                        img={item.img} 
                    />
                })
            }
            </div>
    </div>
  )
}

export default Category

