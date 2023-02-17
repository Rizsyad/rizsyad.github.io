import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const mySkill = [
  {
    icon: <AiFillHtml5 className="w-10 h-10 lg:w-16 lg:h-16 text-[#dce7ff]" />,
    level: "Advanced",
  },
  {
    icon: <DiCss3 className="w-10 h-10 lg:w-16 lg:h-16 text-[#dce7ff]" />,
    level: "Beginner",
  },
  {
    icon: <SiJavascript className="w-10 h-10 lg:w-16 lg:h-16 text-[#dce7ff]" />,
    level: "Intermediate",
  },
  {
    icon: <FaReact className="w-10 h-10 lg:w-16 lg:h-16 text-[#b1b3b6]" />,
    level: "Beginner",
  },
];

const About = () => {
  return (
    <>
      <p className="text-[#dce7ff] text-center text-2xl">About Me</p>
      <p className="text-[#b9cfff]">
        Saya Rizsyad Abiyandra Riadi sangat tertarik dalam berkerja di bidang
        pengembang website. Disiplin dan mampu berkerja dengan baik dalam tim
        maupun individu. Memiliki ketelitian dan kemampuan komunikasi yang baik,
        Senang mempelajari hal baru, dan siap mengerjakan project sesuai
        perintah.
      </p>

      <p className="text-[#dce7ff] text-xl mt-3">Skills</p>
      <div className="flex flex-row justify-around mt-5">
        {mySkill.map((data, i) => {
          return (
            <div className="flex flex-col place-items-center" key={i}>
              {data.icon}
              <p className="text-center text-[#b9cfff] mt-3 text-xs lg:text-lg">
                {data.level}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default About;
