import { useSearchParams, createSearchParams } from 'react-router-dom';

const paramsMap = ['ft', 'b'];

const addParam = (params, newParam) => {
  if (!params || !Object.keys(params).length) return newParam;
  const paramKey = Object.keys(newParam);
  const [key] = paramKey;

  if (key in params)
    return {
      ...params,
      [key]: [...params[key], newParam[key]],
    };

  return { ...params, [key]: [newParam[key]] };
};

const useParamsUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const paramsFromUrl = paramsMap.reduce((acc, act) => {
    if (!act) return acc;
    const valueMap = searchParams.getAll(act);

    if (!valueMap || !valueMap.length) return acc;
    return { ...acc, [act]: searchParams.getAll(act) };
  }, {});

  const get = () => paramsFromUrl;

  const remove = (param) => {
    const [key] = Object.keys(param);

    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const set = (param) => {
    if (!param) return null;
    const prevParams = get();

    setSearchParams(createSearchParams(addParam(prevParams, param)));
  };

  return { get, set, remove };
};

export default useParamsUrl;
