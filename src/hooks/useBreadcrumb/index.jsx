import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getCategoriesFromUrl from 'utils/getCategoriesFromUrl';

const useBreadcrumb = () => {
  const [categories, setCategories] = useState([]);
  const paramsFromUrl = useParams();

  const getCategories = async () => {
    const categoriesFromUrl = await getCategoriesFromUrl(
      Object.values(paramsFromUrl)
    );
    setCategories(categoriesFromUrl);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return categories;
};

export default useBreadcrumb;
