import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Ankahi = () => {
  const cardData = {
    title: "अनकही मोहब्बत",
    description: "दो दिलों की ऐसी दास्तां, जो पूरी होकर भी अधूरी है! दो प्रेमी... जो पास होकर भी दूर है। क्या वो मिल पाएंगे कभी...? उनकी अनकही मोहब्बत क्या कभी मुकम्मल हो पाएगी? देखें...",
    rating: 4.4,
    readTime: "49 मिनट",
    readers: "83326+",
    img: "/img/esk1.png",
    link: "/Ankahimohbaat"
  }

  const arr = new Array(6).fill(cardData);

  return (
    <div className='p-4 mx-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 justify-items-center'>
        {arr.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row w-full max-w-2xl sm:mx-0 mx-4 bg-white rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image */}
            <div className='flex-shrink-0 w-full sm:w-2/5'>
              <Image
                src={item.img}
                alt={item.title}
                width={150}
                height={200}
                layout="responsive"
                objectFit="cover"
                className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
              />
            </div>

            
            <div className="p-4 sm:p-6 flex flex-col justify-between w-full sm:w-3/5">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-md text-gray-600 mb-2 leading-6">{item.description}</p>

             
              <div className="flex gap-20 items-center text-xs mb-3">
                <div className="flex flex-col items-start">
                  <p className="text-yellow-400 font-extrabold">
                    ★ <span className="text-black">{item.rating}</span>
                  </p>
                  <p className='mt-1 text-md'>Rating</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-black font-extrabold">{item.readTime}</p>
                  <p className='mt-1 text-md'>पढ़ने का समय</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-black font-extrabold">{item.readers}</p>
                  <p className='mt-1 text-md'>लोगों ने पढ़ा</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 mt-3">
                <Link href={item.link} className="flex-grow">
                  <Link href="/Collection123">
                  <button className="bg-blue-600 text-white text-sm font-bold py-4 px-1 rounded-xl w-[200px]">
                    अभी पढ़े
                  </button>
                  </Link>
                </Link>
                <button className=" p-2 rounded-full flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.882 13.142 9 12.87 9 12.5V10c0-1.38 1.12-2.5 2.5-2.5S14 8.62 14 10v2.5c0 .37.118.642.316.842l2.35 2.35c.2.2.316.472.316.792v1.5c0 .28-.118.552-.316.752l-2.35 2.35c-.2.2-.472.316-.792.316h-1.5c-.28 0-.552-.118-.752-.316l-2.35-2.35c-.2-.2-.316-.472-.316-.792v-1.5c0-.32.118-.592.316-.792l2.35-2.35zM12 11c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ankahi
