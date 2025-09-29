import React from 'react'
import Card from '../molecules/Card'

const Category = () => {
    const arr = [
        { img: "/img/cate1.png" },
        { img: "/img/cate2.png" },
        { img: "/img/cate3.png" },
        { img: "/img/cate4.png" },
    ]

    return (
        <div className='ml-4 sm:ml-17 mt-10'>
            {/* Header */}
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                <h1 className='text-2xl sm:text-3xl font-bold mb-2 sm:mb-0'>Category</h1>
                <p className='text-sm sm:text-base'>Our Dekhe</p>
            </div>

            {/* Cards container: grid for small screens, flex for large screens */}
            <div className="grid grid-cols-2 sm:flex gap-4">
                {arr.map((item, i) => (
                    <div key={i} className="w-full sm:w-auto">
                        <Card img={item.img} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category


