import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { BiBookAlt } from "react-icons/bi";

import Menu from "./Menu";

const Navbar = ({ changeMenu, menu }) => {
  return (
    <section className="block fixed lg:relative bottom-0 lg:top-0 inset-x-0 z-50 shadow-lg backdrop-blur-lg bg-opacity-30 text-gray-400 border-t-2 lg:border-b-2 lg:border-t-0 border-[#696ebb]">
      <div id="tabs" className="flex justify-between">
        <Menu
          icon={<FaUserAlt className="inline-block mb-1" />}
          title="About"
          isActive={menu === "about"}
          onClick={() => changeMenu("about")}
        />
        <Menu
          icon={<MdOutlineWork className="inline-block mb-1" />}
          title="Resume"
          isActive={menu === "resume"}
          onClick={() => changeMenu("resume")}
        />
        <Menu
          icon={<BiBookAlt className="inline-block mb-1" />}
          title="Project"
          isActive={menu === "portfolio"}
          onClick={() => changeMenu("portfolio")}
        />
      </div>
    </section>
  );
};

export default Navbar;
