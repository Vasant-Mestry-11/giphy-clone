import { useEffect } from "react";
import { GIFState } from "../context/gifContext";
import Gif from "../components/Gif";

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
        className="mt-2 rounded w-full"
      />
      {gifs?.map((gif) => (
        <Gif gif={gif} key={gif.title} />
      ))}
    </div>
  );
};

export default Home;
