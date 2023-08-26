import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          "X-RapidAPI-Key": "",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);

      if (response.status === 429) {
        const retryAfter = parseInt(response.headers["retry-after"], 10);
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        // Retry the request after the recommended wait time
        const retryResponse = await axios.request(options);
        setData(retryResponse.data.data);
      } else {
        setData(response.data.data);
      }

      setError(null);
      setIsLoading(false);
      console.log("fetch done");
    } catch (error) {
      setError(error);
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
