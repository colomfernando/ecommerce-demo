import { useSearchParams } from 'react-router-dom';

const paramsMap = ['ft', 'b', 'c'];

const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsFromUrl = paramsMap.reduce((acc, act) => {
    if (!act) return acc;
    const valueMap = searchParams.get(act);

    if (!valueMap) return acc;
    return { ...acc, [act]: searchParams.get(act) };
  }, {});

  return { get: () => paramsFromUrl, set: setSearchParams };
};

export default useParams;
