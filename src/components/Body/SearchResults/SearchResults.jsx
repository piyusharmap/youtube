import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { API_KEY, SEARCH_API } from "../../../constant";
import SearchCard from "./SearchCard";
import SearchShimmer from "./SearchShimmer";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const search_query = searchParams.get("search_query");

  useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = async () => {
    try {
      const data = await fetch(SEARCH_API + search_query + "&key=" + API_KEY);
      const json = await data.json();

      setSearchResults(json?.items);
    } catch (error) {
      console.log(error);
      setSearchResults([]);
    }
  };

  if (searchResults.length === 0 || !searchResults) return <SearchShimmer />;

  return (
    <div className="flex flex-col items-start gap-4 flex-grow p-2">
      {searchResults.map((result) => {
        return (
          <SearchCard
            key={result?.id?.videoId || result?.id?.channelId}
            info={result}
          />
        );
      })}
    </div>
  );
}
