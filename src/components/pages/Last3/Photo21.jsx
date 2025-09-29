import Image from 'next/image'
import React from 'react'

const Photo21 = () => {
  return (
    <div className='flex flex-col sm:flex-row w-[90%] mt-10 mx-auto justify-between gap-6'>
      
     
      <div className='w-full sm:w-[20%] flex flex-col items-center sm:items-start'>
        <Image
          src="/img/man.png"
          height={160}
          width={160}
          alt='man.png'
        />
        <p className='text-xl font-bold mt-2 text-center sm:text-left'>:);)sarkar...."तुतुन"</p>
        <h2 className='mt-1 text-center sm:text-left'>7130 लोगों ने पढ़ा।</h2>
      </div>

     
      <div className='w-full sm:w-[50%] mt-4 sm:mt-10'>
        <h1 className='mt-2 font-bold text-lg'>लेखक के बारे में</h1>
        <p className='mt-2'>
          रमेश कुमार एक प्रसिद्ध हिंदी लेखक हैं। उन्होंने अपनी पढ़ाई दिल्ली विश्वविद्यालय से पूरी की। रमेश जी ने कहानी, उपन्यास और कविता में महत्वपूर्ण योगदान कविता में महत्वपूर्ण योगदान दिया है।
        </p>
      </div>
    </div>
  )
}

export default Photo21
