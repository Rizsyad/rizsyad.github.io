const MenuResume = ({ icon, title, onClick }) => {
  return (
    <div
      className="flex flex-row items-center text-[#b9cfff] cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <p className="mr-4">{title}</p>
    </div>
  );
};

export default MenuResume;
