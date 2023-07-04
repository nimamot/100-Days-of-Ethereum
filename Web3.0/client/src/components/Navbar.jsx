import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import bitomoji from "../../images/Bitomoji_70 copy.png";

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center">
      <div className="md:flex-[0.5] flex-initial items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
