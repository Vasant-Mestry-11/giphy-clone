import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GIFState } from "../context/gifContext";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const { query } = useParams();

  const { gf, filter } = GIFState();

  useEffect(() => {
    const fetchSearchResults = async () => {
      const { data } = await gf.search(query, {
        sort: "relevant",
        lang: "en",
        type: filter,
      });

      setSearchResults(data);
    };

    fetchSearchResults();
  }, [query, filter, gf]);

  return (
    <div className="w-full grid columns-2 sm:columns-2 md:columns-3 gap-2 my-4 relative">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
      <FilterGif alignLeft />
      {searchResults.length > 0 ? (
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-2">
          {searchResults?.map((gif) => (
            <Gif gif={gif} key={gif.title} />
          ))}
        </div>
      ) : (
        <span>
          No GIFs found for {query}. Try searching for stickers instead?
        </span>
      )}
    </div>
  );
};

export default Search;
