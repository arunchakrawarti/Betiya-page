import Image from 'next/image'
import React from 'react'

const CollectionCard = ({img}) => {
  return (
    <div>
      <Image
      src={img}
      height={285}
      width={400}
      alt='Collection.png'
      />
    </div>
  )
}

export default CollectionCard
