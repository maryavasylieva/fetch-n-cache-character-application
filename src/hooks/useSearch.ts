import { useState } from "react";
import axios from "axios";


type TRecord = {
  id: string | number;
  [key: string]: any;
}

const useSearch = <T extends TRecord>() => {
//   const [cache, setCache] = useState({});
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('')

  const fetchData = async (url: string) => {
    if (!url) return;

    try {
      setIsFetching(true);
      const { data } = await axios.get(url);
      console.log(data);
      setData(data);
    } catch (e: any) {
      setError(e)
    } finally {
      setIsFetching(false);
    }
  };

  const returnData = { fetchData, isFetching, data, error } as const;

  return returnData;
};

export default useSearch;
