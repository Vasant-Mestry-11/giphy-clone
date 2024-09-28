import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  return (
    <nav>
      <div className="relative flex justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <h1 className="text-5xl font-bold tracking-tighter cursor-pointer">
            GIPHY
          </h1>
        </Link>

        {/* render categories */}
        <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
          Reactions
        </Link>
        <button onClick={() => setShowCategories(!showCategories)}>
          <HiEllipsisVertical
            size={35}
            className={`${
              showCategories ? "gradient" : ""
            } py-0.5 hover:gradient border-b-4 hidden lg:block`}
          />
        </button>
        <button className="bg-gray-700 py-1.5 px-6 rounded cursor-pointer">
          <Link to="/favorites">Favorite GIFs</Link>
        </button>
        <button>
          <HiMiniBars3BottomRight
            size={30}
            className="text-sky-400 block lg:hidden"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
