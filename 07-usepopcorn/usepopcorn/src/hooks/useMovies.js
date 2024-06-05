import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constant";

export const useMovies = (query, callback) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callback?.();
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies ");

        const data = await res.json();

        if (data?.Response === "False") {
          throw new Error("Movie not found");
        }

        setMovies(data.Search);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query?.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    // clean up function
    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };
};
