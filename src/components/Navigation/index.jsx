import { arrayOf, number, oneOf, shape, string } from 'prop-types';
import React, { useState, useEffect } from 'react';
import getDepartments from 'utils/getDepartments';
import Department from 'components/Department';
import Styles from './styles';
import getCategoriesByParentId from 'utils/getCategoriesByParentId';
import Category from 'components/Category';

const Navigation = ({ categories, ...props }) => {
  const [activeId, setActiveId] = useState(null);
  const [activeCategories, setActiveCategories] = useState([]);
  const [isHover, setIsHover] = useState(false);

  const handleOnMouseEnter = (id) => {
    setIsHover(true);
    if ((id && !activeId) || id !== activeId) return setActiveId(id);
  };

  const handleOnMouseLeave = () => setIsHover(false);

  const departments = getDepartments(categories);

  useEffect(() => {
    if (activeId)
      setActiveCategories(getCategoriesByParentId(categories, activeId));
  }, [activeId]);

  return (
    <Styles.Wrapper {...props}>
      <Styles.Departments onMouseLeave={handleOnMouseLeave}>
        <Styles.InnerDepartment>
          {!!departments.length &&
            departments.map((dept) => (
              <Department
                onMouseEnter={() => handleOnMouseEnter(dept.id)}
                key={dept.id}
              >
                {dept.name}
              </Department>
            ))}
        </Styles.InnerDepartment>
        <Styles.Categories isOpen={isHover && activeId}>
          <Styles.InnerCategories>
            {!!activeCategories.length &&
              activeCategories.map((cat) => (
                <Category
                  cbOnClick={handleOnMouseLeave}
                  key={cat.id}
                  name={cat.name}
                  href={cat.link}
                  subcategories={cat.children}
                />
              ))}
          </Styles.InnerCategories>
        </Styles.Categories>
      </Styles.Departments>
    </Styles.Wrapper>
  );
};

const shapeCat = shape({
  id: number,
  link: string,
  name: string,
  parent: oneOf([null, number]),
  type: string,
  value: string,
});

Navigation.propTypes = {
  categories: arrayOf(
    shape({
      children: arrayOf(shapeCat),
      shapeCat,
    })
  ),
};

Navigation.defaultProps = {
  categories: [],
};

export default Navigation;
