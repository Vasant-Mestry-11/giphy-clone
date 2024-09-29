import { useEffect } from "react";
import { GIFState } from "../context/gifContext";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";

const Home = () => {
  const { gf, gifs, filter, setGifs } = GIFState();

  const fetchTrendingGIFs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };

  useEffect(() => {
    fetchTrendingGIFs();
  }, []);

  return (
    <div>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="my-2 rounded w-full"
      />

      {/* Filter GIFs */}
      <FilterGif showTrending />

      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-2">
        {gifs?.map((gif) => (
          <Gif gif={gif} key={gif.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
