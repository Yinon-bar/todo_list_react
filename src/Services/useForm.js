import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function useForm(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  return [data, error, loading];
}

export default useForm;
