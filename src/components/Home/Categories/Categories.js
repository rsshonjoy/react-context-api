import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = (props) => {
  const {count} = props;
  return (
    <div>
      <h3>This is a category</h3>
      <CategoryDetail count={count}></CategoryDetail>
    </div>
  );
};

export default Categories;