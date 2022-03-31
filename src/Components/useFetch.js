import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url, reqMethod, passData ) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios({
      method: reqMethod,
      url: url,
      data: passData,
      
    }).then((response) => { setData(response.data);
    }).catch((err) => {
      setError(err);
    }).finally(() => {setLoading(false)})
  }, [url]);

  

  return { data, loading, error };
}

export default useFetch;
