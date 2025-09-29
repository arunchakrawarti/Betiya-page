import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Camera = () => {
    
  return (
    <div>
      <Link href="/Design12Design">
      <Image
      src="/img/Design1.png"
      height={342}
      width={1390}
      alt='Camera.png'
      />
      </Link>
    </div>
  )
}

export default Camera




