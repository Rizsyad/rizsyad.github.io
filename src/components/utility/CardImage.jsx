const CardImage = ({ imgView, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-[#484EA1] hover:bg-[#2b2f61] rounded-lg shadow md:flex-row my-4">
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={imgView}
        alt={title}
        loading="lazy"
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#dce7ff]">
          {title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardImage;
