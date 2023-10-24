import TopHeader from "./TopHeader"
import "./Header.scss";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [open, setopen] = useState(false);

  return (
    <header className="main-header">
      <TopHeader setopen={setopen} />
      <MiddleHeader />
      <Navbar open={open} />
    </header>
  );
};

export default Header;
