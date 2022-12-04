import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const paramsMap = ['ft', 'brand'];

const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({});

  useEffect(() => {
    const paramsFromUrl = paramsMap.reduce((acc, act) => {
      if (!act) return acc;
      return { ...acc, [act]: searchParams.get(act) };
    }, {});

    setParams(paramsFromUrl);
  }, []);

  return { get: () => params, set: setSearchParams };
};

export default useParams;
