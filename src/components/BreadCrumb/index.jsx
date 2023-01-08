import { arrayOf, number, shape, string } from 'prop-types';
import React from 'react';

const BreadCrumb = ({ categories }) => {
  if (!categories || !categories.length) return null;
  console.log('categories :>> ', categories);
  return <div> </div>;
};

BreadCrumb.propTypes = {
  categories: arrayOf(
    shape({
      name: string,
      value: string,
      id: number,
      link: string,
    })
  ).isRequired,
};

export default BreadCrumb;
