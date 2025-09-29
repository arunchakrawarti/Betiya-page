import React from 'react'
import LoveCard from '../molecules/LoveCard'

const Mnorangan = () => {
    const arr = [
        { img: "/img/mnoranjan1.png" },
        { img: "/img/mnoranjan1.png" },
        { img: "/img/mnoranjan1.png" },
        { img: "/img/mnoranjan1.png" },
        { img: "/img/mnoranjan1.png" },
        { img: "/img/mnoranjan1.png" },
        
    ]

    // Small screens: show only first 6 cards
    const smallScreenArr = arr.slice(0, 6)

    return (
        <div className='ml-4 sm:mx-17 mt-10'>
            {/* Header */}
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                <h1 className='text-2xl sm:text-3xl font-bold mb-2 sm:mb-0'>मनोरंजन कहानियाँ</h1>
                <p className='text-sm sm:text-xl'>Our Dekhe</p>
            </div>

            {/* Cards container */}
            <div className="sm:flex gap-4">
                {/* Small screens: grid of 2 columns */}
                <div className="grid grid-cols-2 gap-4 sm:hidden">
                    {smallScreenArr.map((item, i) => (
                        <LoveCard key={i} img={item.img} />
                    ))}
                </div>

                {/* Large screens: show all 7 cards horizontally */}
                <div className="hidden sm:flex gap-10">
                    {arr.map((item, i) => (
                        <LoveCard key={i} img={item.img} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mnorangan

