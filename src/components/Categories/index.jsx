import { arrayOf, number, shape, string } from 'prop-types';
import React from 'react';
import getDepartments from 'services/categories/getDepartments';
import Styles from './styles';

const CategoriesDesktop = ({ categories, ...props }) => {
  const departments = getDepartments(categories);
  console.log('departments :>> ', departments);

  return (
    <Styles.Wrapper {...props}>
      <Styles.Inner>
        {!!departments.length &&
          departments.map((dept) => <div key={dept.id}>{dept.name}</div>)}
      </Styles.Inner>
    </Styles.Wrapper>
  );
};

const shapeCat = shape({
  id: number,
  link: string,
  name: string,
  parent: null || number,
  type: string,
  value: string,
});

CategoriesDesktop.propTypes = {
  categories: arrayOf(
    shape({
      children: arrayOf(shapeCat),
      shapeCat,
    })
  ),
};

CategoriesDesktop.defaultProps = {
  categories: [],
};

export default CategoriesDesktop;
