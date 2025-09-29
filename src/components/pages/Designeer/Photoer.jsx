import Image from 'next/image'
import React from 'react'

const Photoer = () => {
  return (
    <div className='w-[95%] m-auto'>
      <Image
            src="/img/Design1.png"
            height={342}
            width={1390}
            alt='Camera.png'
            />
    </div>
  )
}

export default Photoer
