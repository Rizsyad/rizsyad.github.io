import { useState } from "react";

import MenuResume from "../utility/MenuResume";
import TimeLine from "../utility/TimeLine";

import { MdSchool, MdOutlineWork } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import notfound from "../../assets/img/notfound.gif";

const Resume = () => {
  const [menu, setMenu] = useState("Pendidikan");

  const changeMenu = (menu) => setMenu(menu);

  return (
    <>
      <p className="text-[#dce7ff] text-center text-2xl">Resume</p>
      <div className="flex flex-wrap justify-center mt-5">
        {/* pendidikan */}
        <MenuResume
          icon={<MdSchool className="mr-2" />}
          title={menu === "Pendidikan" && "Education"}
          onClick={() => changeMenu("Pendidikan")}
        />
        {/* pengalaman */}
        <MenuResume
          icon={<MdOutlineWork className="mr-2" />}
          title={menu === "Pengalaman" && "Experience"}
          onClick={() => changeMenu("Pengalaman")}
        />
        {/* sertifikat */}
        <MenuResume
          icon={<AiFillSafetyCertificate className="mr-2" />}
          title={menu === "Sertifikat" && "Certificate"}
          onClick={() => changeMenu("Sertifikat")}
        />
      </div>
      {menu === "Pendidikan" && (
        <ol className="relative border-l border-gray-200 mt-12">
          <TimeLine
            date="2006 - 2012"
            title="SDN Karang Tengah 10"
            address="Kota Tangerang Selatan, Banten, Indonesia"
          />
          <TimeLine
            date="2012 - 2015"
            title="SMPN 14 TangSel"
            address="Kota Tangerang Selatan, Banten, Indonesia"
          />
          <TimeLine
            date="2015 - 2018"
            title="SMK Fadilah"
            address="Kota Tangerang Selatan, Banten, Indonesia"
          />
        </ol>
      )}

      {menu === "Pengalaman" && (
        <div className="flex justify-center">
          <img src={notfound} alt="Not Found" />
        </div>
      )}

      {menu === "Sertifikat" && (
        <div className="flex justify-center">
          <img src={notfound} alt="Not Found" />
        </div>
      )}
    </>
  );
};

export default Resume;
