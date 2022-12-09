import { useSearchParams } from 'react-router-dom';

const paramsMap = ['ft', 'b', 'c'];

const formatParams = {
  ft: (arg) => arg,
  b: (b) => [...new Set(b.split(','))],
};

const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsFromUrl = paramsMap.reduce((acc, act) => {
    if (!act) return acc;
    const valueMap = searchParams.get(act);

    if (!valueMap) return acc;
    return { ...acc, [act]: formatParams[act](searchParams.get(act)) };
  }, {});

  return { get: () => paramsFromUrl, set: setSearchParams };
};

export default useParams;
