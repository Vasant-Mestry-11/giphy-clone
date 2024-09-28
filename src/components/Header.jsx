import { useState } from "react";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  return <nav></nav>;
};

export default Header;
