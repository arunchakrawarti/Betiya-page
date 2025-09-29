import CollectionCard from '@/components/molecules/CollectionCard';
import React from 'react';

const Man = () => {
  let arr = [
    { image: "/img/Collection.png" },
    { image: "/img/Collection.png" },
    { image: "/img/Collection.png" },
  ];

  return (
    <div className="w-[95%] sm:w-[100%] mx-auto mt-15">
      <h1 className="text-4xl font-bold mb-10 ml-5 text-center sm:text-left">Collection of Hindi Stories</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {arr.map((item, i) => (
          <div key={i} className="w-full sm:w-[90%] lg:w-auto">
            <CollectionCard img={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Man;
