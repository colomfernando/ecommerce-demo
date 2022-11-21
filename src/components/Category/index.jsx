import { string, shape, oneOf, number, arrayOf } from 'prop-types';
import React from 'react';
import Styles from './styles';

const Category = ({ name, href, subcategories }) => {
  if (!name) return null;
  return (
    <Styles.Wrapper>
      <Styles.Category href={href}>{name}</Styles.Category>
      {subcategories &&
        subcategories.length &&
        subcategories.map((sub) => (
          <Styles.SubCategory key={sub.id} href={sub.link}>
            {sub.name}
          </Styles.SubCategory>
        ))}
    </Styles.Wrapper>
  );
};

Category.propTypes = {
  name: string.isRequired,
  href: string.isRequired,
  subcategories: arrayOf(
    shape({
      id: number,
      link: string,
      name: string,
      parent: oneOf([null, number]),
      type: string,
      value: string,
    })
  ),
};
export default Category;
