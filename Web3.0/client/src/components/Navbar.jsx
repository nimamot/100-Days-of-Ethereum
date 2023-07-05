import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
//import bitomoji from "../../images/Bitomoji_70 copy.png";

const NavbarItem = ({ title, classprops }) => {
  return <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>;
};

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center">
      <div className="md:flex-[0.5] flex-initial items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
