import React from 'react';

const Home = (props) => {
  const {count, setCount} = props;
  return (
    <div>
      <h1>This is a Home: {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Home;