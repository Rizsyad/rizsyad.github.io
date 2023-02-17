const Card = ({ children, className }) => {
  className = `bg-transparent border-2 mb-5 border-[#494ea1] rounded-lg shadow-xl md:mb-0 ${className}`;
  return <div className={className}>{children}</div>;
};

export default Card;
