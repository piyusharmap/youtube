import {
  faArrowUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SEARCH_API } from "../../constant";
import store from "../../app/store";
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
      const data = await fetch(SEARCH_API + searchQuery);
      const json = await data.json();

      setSearchSuggestions(json[1]);
      dispatch(addSearchResult({ [searchQuery]: json[1] }));
    } catch (error) {
      console.log(error);
      setSearchSuggestions([]);
    }
  };

  return (
    <div className="px-2 flex items-center bg-blackSecondary/50 rounded-full relative">
      <input
        className="w-80 p-2 font-primary text-base bg-transparent focus:outline-0 focus:w-96 transition-all"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setSuggestionBoxVisibility(true)}
      />

      <button className="p-2 hover:text-redMain">
        <FontAwesomeIcon className="text-base" icon={faMagnifyingGlass} />
      </button>

      {suggestionBoxVisibility && searchSuggestions.length > 0 && (
        <div className="w-full bg-blackSecondary absolute top-[110%] left-0 rounded-md">
          {searchSuggestions.length > 0 &&
            searchSuggestions.map((suggestion, index) => {
              return (
                <p
                  className="py-1 px-2 hover:shadow-md"
                  key={index}
                  onClick={() => {
                    setSearchQuery(suggestion);
                    setSuggestionBoxVisibility(false);
                  }}
                >
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="text-sm rotate-45"
                      icon={faArrowUp}
                    />
                  </span>
                  {suggestion}
                </p>
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
