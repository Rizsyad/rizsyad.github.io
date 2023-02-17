const Badge = ({ text, className }) => {
  className = `bg-[#494ea1] text-[#dce7ff] text-xs font-medium mr-2 rounded ${className} `;
  return <span className={className}>{text}</span>;
};

export default Badge;
