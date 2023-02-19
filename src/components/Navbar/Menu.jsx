const Menu = ({ icon, title, isActive, onClick }) => {
  return (
    <div
      className={`w-full ${
        isActive
          ? "text-white"
          : "hover:bg-white focus:text-[#494ea1] hover:text-[#494ea1]"
      }  justify-center inline-block text-center pt-2 pb-1 cursor-pointer`}
      onClick={onClick}
    >
      {icon}
      <span className="tab block text-xs">{title}</span>
    </div>
  );
};

export default Menu;
