const TimeLine = ({ date, title, address }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-[#dce7ff] rounded-full mt-1.5 -left-1.5 border border-[#494ea1]"></div>
      <time className="mb-1 text-sm font-normal leading-none text-[#b9cfff]">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-[#dce7ff]">{title}</h3>
      <p className="mb-4 text-base font-normal text-[#b9cfff]">{address}</p>
    </li>
  );
};

export default TimeLine;
