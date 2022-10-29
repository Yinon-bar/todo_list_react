import { useEffect } from "react";
import { useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        setError(resp.status);
        throw resp.status;
      })
      .then((data) => {
        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  return [data, error, loading];
}

export default useFetch;
