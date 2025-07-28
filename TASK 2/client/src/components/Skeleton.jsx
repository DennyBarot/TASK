import React from 'react';

const Skeleton = () => {
  const skeletonCards = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {skeletonCards.map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 animate-pulse rounded-lg p-4"
          style={{ height: '500px' }}
        >
          <div className="bg-gray-400 h-56 rounded-md mb-3"></div>
          <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
