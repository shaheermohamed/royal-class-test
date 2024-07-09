import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = ({ methods, url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const refetch = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: methods,
          url: url,
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [methods, refresh, url]);
  return { data, error, loading, refetch };
};
