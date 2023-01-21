import { string, shape, oneOf, number, arrayOf, func } from 'prop-types';
import React from 'react';
import Styles from './styles';

const Category = ({ cbOnClick, name, href, subcategories }) => {
  if (!name) return null;
  return (
    <Styles.Wrapper>
      <Styles.Category cbOnClick={cbOnClick} to={href}>
        {name}
      </Styles.Category>
      {subcategories &&
        subcategories.length &&
        subcategories.map((sub) => (
          <Styles.SubCategory cbOnClick={cbOnClick} key={sub.id} to={sub.link}>
            {sub.name}
          </Styles.SubCategory>
        ))}
    </Styles.Wrapper>
  );
};

Category.propTypes = {
  name: string.isRequired,
  cbOnClick: func,
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
