import CollectionCard from '@/components/molecules/CollectionCard'
import React from 'react'

const Collection = () => {
    let arr = [
        {
            image:"/img/Collection.png",
        },
        {
            image:"/img/Collection.png",
        },
        {
            image:"/img/Collection.png",
        },
        {
            image:"/img/Collection.png",
        },
        {
            image:"/img/Collection.png",
        },
        {
            image:"/img/Collection.png",
        },
        {
            image:"/img/Collection.png",
        },
        {
            image:"/img/Collection.png",
        },

    ]
  return (
   <div className="w-full mx-auto">
      <h1 className="text-4xl font-bold mb-10">Collection of Hindi Stories</h1>
      
      <div className="grid grid-cols-3 gap-15">
        {/* col-1 → 3 images */}
        <div className="flex flex-col gap-15">
          {arr.slice(0, 3).map((item, i) => (
            <CollectionCard key={i} img={item.image} />
          ))}
        </div>

        {/* col-2 → 3 images */}
        <div className="flex flex-col gap-15">
          {arr.slice(3, 6).map((item, i) => (
            <CollectionCard key={i + 3} img={item.image} />
          ))}
        </div>

        {/* col-3 → 2 images */}
        <div className="flex flex-col gap-15">
          {arr.slice(6, 8).map((item, i) => (
            <CollectionCard key={i + 6} img={item.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
