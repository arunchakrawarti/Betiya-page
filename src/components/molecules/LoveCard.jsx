import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoveCard = ({img}) => {
  return (
    <Link href="/Apnimohbat">
    <div>
      <Image
      src={img}
      height={238}
      width={204}
      alt='love1.png'
      />
    </div>
    </Link>
  )
}

export default LoveCard
