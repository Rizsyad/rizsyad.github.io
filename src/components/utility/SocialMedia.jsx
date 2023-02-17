const SocialMedia = ({ title, icon, link }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="text-[#757AC6] hover:text-[#b9cfff] md:text-lg"
      title={title}
    >
      {icon}
    </a>
  );
};

export default SocialMedia;
