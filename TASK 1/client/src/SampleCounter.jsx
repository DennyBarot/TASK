import React from 'react'



const SampleCounter = (props) => {

    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    };
  return (
      <div className="max-w-sm mx-auto my-6 p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
      <p className="text-xl font-semibold text-gray-800 mb-4">{props.title}</p>
      <p className="text-lg text-gray-600 mb-4">Count: {count}</p>
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Increment
      </button>
    </div>
  );
};

export default SampleCounter;
