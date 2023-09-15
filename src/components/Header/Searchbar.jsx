import {
  faArrowUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SEARCH_SUGGESTIONS_API } from "../../constant";
import {
  addSearchResult,
  clearSearchResult,
} from "../../app/slices/searchSlice";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState();
  const [suggestionBoxVisibility, setSuggestionBoxVisibility] = useState(false);
  const searchResults = useSelector((store) => store.searchbar.searchResults);

  useEffect(() => {
    if (searchQuery.length === 0) dispatch(clearSearchResult());

    const getSuggestions = setTimeout(() => {
      if (searchResults[searchQuery]) {
        setSearchSuggestions(searchResults[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 150);

    return () => clearTimeout(getSuggestions);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
      const json = await data.json();

      setSearchSuggestions(json[1]);
      dispatch(addSearchResult({ [searchQuery]: json[1] }));
    } catch (error) {
      console.log(error);
      setSearchSuggestions([]);
    }
  };

  return (
    <div className="px-2 text-blackMain dark:text-white flex items-center border-[1px] border-blackMain/50 dark:border-white/50 rounded-full relative">
      <input
        className="w-96 p-2 text-base bg-transparent focus:outline-none"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setSuggestionBoxVisibility(true)}
      />

      <a
        href={searchQuery != "" ? "/results?search_query=" + searchQuery : null}
        className="p-2 hover:text-redMain"
      >
        <FontAwesomeIcon className="text-base" icon={faMagnifyingGlass} />
      </a>

      {suggestionBoxVisibility && searchSuggestions.length > 0 && (
        <div className="w-full text-blackMain dark:text-white bg-white dark:bg-blackMain absolute top-[110%] left-0 rounded-md">
          {searchSuggestions.length > 0 &&
            searchSuggestions.map((suggestion, index) => {
              return (
                <a
                  className="mt-1 py-1 px-2 block hover:bg-blackMain/50 dark:hover:bg-white/50"
                  key={index}
                  onClick={() => {
                    setSearchQuery(suggestion);
                    setSuggestionBoxVisibility(false);
                  }}
                  href={
                    searchQuery != ""
                      ? "/results?search_query=" + searchQuery
                      : null
                  }
                >
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="text-sm rotate-45"
                      icon={faArrowUp}
                    />
                  </span>
                  {suggestion}
                </a>
              );
            })}

          <p className="p-2 text-xs text-right italic opacity-80">
            Report search suggestions
          </p>
        </div>
      )}
    </div>
  );
}
