import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>This is a Home: {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Home;