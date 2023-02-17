import { useState } from "react";

import Sidebar from "../sidebar";
import Card from "../utility/Card";

import About from "../about";
import Resume from "../resume";
import Project from "../project";
import Navbar from "../Navbar";

const Content = () => {
  const [menu, setMenu] = useState("about");

  const changeMenu = (menu) => setMenu(menu);

  return (
    <>
      <Navbar changeMenu={changeMenu} menu={menu} />
      <div className="flex flex-col justify-center mt-5 mb-24 mx-3 md:mt-10 md:flex-row">
        <Sidebar />
        <Card className="w-full p-5 md:w-80 lg:w-[50rem] md:mx-5">
          {menu === "about" && <About />}
          {menu === "resume" && <Resume />}
          {menu === "portfolio" && <Project />}
        </Card>
      </div>
    </>
  );
};

export default Content;
