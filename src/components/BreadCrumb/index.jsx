import { arrayOf, number, shape, string } from 'prop-types';
import React from 'react';
import Styles from './styles';

const BreadCrumb = ({ categories }) => {
  if (!categories || !categories.length) return null;

  return (
    <Styles.Wrapper>
      {categories.map((cat, idx) => (
        <Styles.CategoryLink key={`${cat.id}-${idx}`} to={cat.link}>
          <Styles.Category>{cat.name}</Styles.Category>
          {idx < categories.length - 1 && (
            <Styles.Separator>{`>`}</Styles.Separator>
          )}
        </Styles.CategoryLink>
      ))}
    </Styles.Wrapper>
  );
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
