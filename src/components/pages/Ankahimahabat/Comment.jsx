import Link from 'next/link'
import React from 'react'

const Comment = () => {
  return (
    <div className="w-[90%] mt-10 m-auto">
      <h1 className="text-3xl font-bold">Comment kre</h1>

      <div className="w-full flex flex-col sm:flex-row gap-3 mt-5 m-auto">
       
        <div className="w-full sm:w-[85%] bg-gray-100 py-3 sm:py-5 pl-5 sm:pl-10 text-lg rounded-md">
          <input
            type="text"
            placeholder="Enter Your Comment"
            className="w-full bg-transparent outline-none"
          />
        </div>

       
        <div className="w-full sm:w-[14%] bg-blue-500 rounded-3xl text-center py-3 sm:pt-5 text-white">
          <Link href="/Prakashit1">
          <button className="text-lg w-full">प्रकाशित करे</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Comment
