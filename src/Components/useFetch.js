import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url, reqMethod, reqData) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios({
          url: url,
          method: reqMethod,
          data: reqData,
        })
          .then((response) => {
            setData(response.data);
          })
          .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setLoading(false);
          });
    }, [url]);

    const refetch = () => {
        setLoading(true);
        axios({
            url: url,
            method: "get",
        })
           .then((response) => {
             setData(response.data);
           })
           .catch((err) => {
             setError(err);
           })
           .finally(() => {
             setLoading(false);
           });
    };

    return { data, loading, error, refetch };
}

export default useFetch;
