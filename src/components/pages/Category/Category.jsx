import Card from '@/components/molecules/Card'
import React from 'react'

const Category = () => {
    let arr = [
        { img:"/img/cate1.png" },
        { img:"/img/cate1.png" },
        { img:"/img/cate1.png" },
        { img:"/img/cate3.png" },
        { img:"/img/cate3.png" },
        { img:"/img/cate3.png" },
        { img:"/img/cate2.png" },
        { img:"/img/cate2.png" },
        { img:"/img/cate2.png" },
        { img:"/img/cate3.png" },
        { img:"/img/cate3.png" },
        { img:"/img/cate4.png" },
    ]

  return (
    <div className="w-[100%] mx-auto mt-5">
        <h1 className="text-5xl -ml-10 font-bold mb-10">Category</h1>

        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
          {arr.map((item, i) => (
            <Card key={i} img={item.img} />
          ))}
        </div>
    </div>
  )
}

export default Category
