import CollectionCard from '@/components/molecules/CollectionCard'
import React from 'react'

const Man = () => {
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
       
    ]
  return (
   <div className="w-full mx-auto mt-15">
      <h1 className="text-4xl font-bold mb-10">Collection of Hindi Stories</h1>
      
      <div className="grid grid-row-3 gap-10">
        {/* col-1 → 3 images */}
        <div className="flex flex-row gap-15">
          {arr.slice(0, 3).map((item, i) => (
            <CollectionCard key={i} img={item.image} />
          ))}
        </div>

        
      </div>
    </div>
  )
}

export default Man
