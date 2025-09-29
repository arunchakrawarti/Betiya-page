import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({img}) => {
  return (
    <Link href="/Category1">
    <div className='flex gap-5'>
      <Image
      src={img}
      height={320}
      width={375}
      alt='cate.png'
      />
    </div>
    </Link>
  )
}

export default Card
