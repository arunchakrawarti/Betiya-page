import LoveCard from '@/components/molecules/LoveCard'
import React from 'react'

const Imger = () => {
    let arr = [
        { img: "/img/story1.png" },
        { img: "/img/story1.png" },
        { img: "/img/story1.png" },
        { img: "/img/story1.png" },
        { img: "/img/story1.png" },
        { img: "/img/story1.png" },
    ];

    return (
        <div className='sm:mx-17 mt-10'>
            <div className='flex mb-2 justify-between items-center'>
                <h1 className='text-3xl font-bold'>Chapter</h1>
                <p>Our Dekhe</p>
            </div>

           
            <div className="grid grid-cols-2 gap-4 mt-5 sm:flex sm:gap-10">
                {arr.map((item, i) => (
                    <LoveCard key={i} img={item.img} />
                ))}
            </div>
        </div>
    );
}

export default Imger;
