import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Manner = () => {
  return (
    <div className="flex flex-col md:flex-row w-[90%] mt-10 mx-auto justify-between gap-6">
      
     
      <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
        <Link href="/Designnerer12">
          <Image
            src="/img/man.png"
            height={160}
            width={160}
            alt="man.png"
            className="mx-auto"
          />
        </Link>

        <p className="text-xl font-bold mt-2">:);)sarkar...."तुतुन"</p>
        <h2 className="mt-1">7130 लोगों ने पढ़ा।</h2>
      </div>

      
      <div className="w-full md:w-2/3 mt-4 md:mt-10">
        <h1 className="font-bold text-lg">लेखक के बारे में</h1>
        <p className="mt-2">
          रमेश कुमार एक प्रसिद्ध हिंदी लेखक हैं। उन्होंने अपनी पढ़ाई दिल्ली विश्वविद्यालय से पूरी की। रमेश जी ने कहानी, उपन्यास और कविता में महत्वपूर्ण योगदान दिया है।
        </p>
      </div>
    </div>
  )
}

export default Manner