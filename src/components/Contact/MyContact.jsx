import Badge from "../utility/Badge";

const MyContact = ({ icon, title, text }) => {
  return (
    <div className="flex items-start mt-5 text-[0.65rem] md:text-base">
      <Badge text={icon} className="p-3" />
      <div className="grow ml-2">
        <p className="font-bold text-[#dce7ff]">{title}</p>
        <p className="text-[#b9cfff]">{text}</p>
      </div>
    </div>
  );
};

export default MyContact;
