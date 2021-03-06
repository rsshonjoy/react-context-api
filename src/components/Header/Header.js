import React from 'react';

const Header = (props) => {
  const {count} = props;
  return (
    <div>
      <h1>This is a header: {count}</h1>
    </div>
  );
};

export default Header;