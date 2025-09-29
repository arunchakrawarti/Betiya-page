import Image from 'next/image'
import React from 'react'

const AnkahiCard = ({img}) => {
  return (
    <div>
      <Image
      src={img}
      height={272}
      width={216}
      alt='eska.png'
      />
    </div>
  )
}

export default AnkahiCard
