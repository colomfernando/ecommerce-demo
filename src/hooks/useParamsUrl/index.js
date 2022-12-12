import { useLocation } from 'react-router-dom';

const paramsMap = ['ft', 'b', 'c'];

const useParamsUrl = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const paramsFromUrl = paramsMap.reduce((acc, act) => {
    if (!act) return acc;
    const valueMap = query.getAll(act);

    if (!valueMap || !valueMap.length) return acc;
    return { ...acc, [act]: query.getAll(act) };
  }, {});

  return { get: () => paramsFromUrl };
};

export default useParamsUrl;
