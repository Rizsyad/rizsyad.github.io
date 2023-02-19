import profile from "../../assets/img/profile.jpg";
import MyContact from "../Contact/MyContact";
import Card from "../utility/Card";
import Badge from "../utility/Badge";
import SocialMedia from "../utility/SocialMedia";

import { MdEmail, MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const myContact = [
  {
    title: "Email",
    text: "rizsyad@gmail.com",
    icon: <MdEmail />,
  },
  {
    title: "Age",
    text: new Date().getFullYear() - 2001,
    icon: <SlCalender />,
  },
  {
    title: "Location",
    text: "Tangerang, ID",
    icon: <MdLocationPin />,
  },
];

const Sidebar = () => {
  return (
    <Card className="w-full p-5 md:w-80">
      <div className="flex flex-row md:flex-col md:items-center">
        <img
          src={profile}
          alt="Profile"
          className="w-20 h-20 rounded-md md:w-52 md:h-52"
        />
        <p className="text-[#dce7ff] mt-5 text-md ml-3 md:text-center md:text-lg md:ml-0 md:mt-3">
          Rizsyad A.R
          <div className="text-center">
            <Badge
              text="Backend Developer"
              className="px-2.5 py-0.5  md:ml-0"
            />
          </div>
        </p>
      </div>

      <div className="grid gap-5 grid-cols-2 md:grid-cols-1 md:gap-2">
        {myContact.map((data, i) => {
          return (
            <MyContact
              key={i}
              title={data.title}
              text={data.text}
              icon={data.icon}
            />
          );
        })}
      </div>

      <div className="flex flex-row justify-center mt-5 space-x-2">
        <SocialMedia
          title="Github"
          icon={<AiFillGithub />}
          link="https://github.com/rizsyad"
        />

        <SocialMedia
          title="Linkedin"
          icon={<AiFillLinkedin />}
          link="https://www.linkedin.com/in/rizsyad-ar-90ba2a244"
        />

        <SocialMedia
          title="Instagram"
          icon={<AiFillInstagram />}
          link="https://www.instagram.com/rizsyad"
        />
      </div>
    </Card>
  );
};

export default Sidebar;
