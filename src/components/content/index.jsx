import { lazy, useState } from "react";

import About from "../about";
import Resume from "../resume";
import Project from "../project";

const Sidebar = lazy(() => import("../sidebar"));
const Navbar = lazy(() => import("../Navbar"));
const Card = lazy(() => import("../utility/Card"));

const Content = () => {
  const [menu, setMenu] = useState("about");

  const changeMenu = (menu) => setMenu(menu);

  return (
    <>
      <Navbar changeMenu={changeMenu} menu={menu} />
      <div className="flex flex-col justify-center mt-5 mb-24 mx-3 md:mt-10 md:flex-row">
        <Sidebar />
        <Card className="w-full p-5 lg:w-[50rem] md:mx-5">
          {menu === "about" && <About />}
          {menu === "resume" && <Resume />}
          {menu === "portfolio" && <Project />}
        </Card>
      </div>
    </>
  );
};

export default Content;
