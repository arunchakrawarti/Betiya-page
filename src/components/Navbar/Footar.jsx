import Image from 'next/image'
import React from 'react'

const Footar = () => {
  return (
    <div className='flex flex-col mt-10 lg:flex-row w-[90%] mx-auto justify-between gap-10'>

      {/* Logo + Description */}
      <div className='flex flex-col items-center lg:items-start'>
        <Image
          src="/img/betiyalogo.png"
          alt='betiyalogo.png'
          height={94}
          width={183}
          className='mx-auto lg:mx-0'
        />
        <p className='mt-10 text-center lg:text-left'>
          आप सबके लिए में नई कहानी लेके आयी हुँ। ये कहानी है युवेन <br />
          खन्ना और अविका शर्मा की... दोनों का प्यार स्कूल में शुरू तो हुआ...<br />
          पर कुछ कारणों से इन्हें होना पड़ा एक दूसरे से दूर.... अब ६ साल <br />
          बाद ...
        </p>

        <hr className="w-full lg:w-[300%] mx-auto border-t-2 border-gray-300 mt-10" />

        <div className='flex justify-center lg:justify-start gap-2 mt-10'>
          <Image src="/img/instarlogo.png" alt='instarlogo.png' height={44} width={44} />
          <Image src="/img/facelogo.png" alt='facelogo.png' height={44} width={44} />
          <Image src="/img/birdlogo.png" alt='birdlogo.png' height={44} width={44} />
          <Image src="/img/linkindlogo.png" alt='linkind.png' height={44} width={44} />
        </div>
      </div>

      {/* Short Links */}
      <div className='text-center lg:text-left'>
        <p className='font-bold text-xl'>Short links</p>
        <ul className='mt-5'>
          <li className='mt-5 text-lg'>होम</li>
          <li className='mt-5 text-lg'>Category</li>
          <li className='mt-5 text-lg'>Article</li>
          <li className='mt-5 text-lg'>Write</li>
        </ul>
      </div>

      {/* Help Center */}
      <div className='text-center lg:text-left'>
        <p className='font-bold text-xl'>हेल्प सेंटर</p>
        <ul className='mt-5'>
          <li className='mt-5 text-lg'>Reading</li>
          <li className='mt-5 text-lg'>Copyright</li>
          <li className='mt-5 text-lg'>General</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>

        {/* Email */}
        <div className='flex gap-3 items-center mt-5'>
          <Image src="/img/maillogo.png" alt='maillogo.png' height={24} width={24} />
          <p>infobetiya@gmail.com</p>
        </div>

        {/* Address */}
        <div className='flex gap-3 items-start mt-5'>
          <Image src="/img/addresslogo.png" alt='addresslogo.png' height={24} width={24} />
          <p className='text-sm sm:text-base text-left'>
            Betiya Stores Private Limited  <br />
            Singh Tower, 4th Floor. No.2,26.27 <br />
            and 3, Krishna Nagar Industrial Area, <br />
            Hosur Main Road, Utter Pradesh, <br />
            Karnataka 565029
          </p>
        </div>

        {/* Footer Note */}
        <p className='mt-40 text-lg text-gray-400 text-center lg:text-left'>
          2024 © Betiya. All rights reserved
        </p>
      </div>

    </div>
  )
}

export default Footar
