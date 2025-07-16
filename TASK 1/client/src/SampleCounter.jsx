import React from 'react'



const SampleCounter = (props) => {

    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    };
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

    </div>
  );
};

export default SampleCounter;
