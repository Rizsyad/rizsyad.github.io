import notfound from "../../assets/img/notfound.gif";

const Project = () => {
  return (
    <>
      <p className="text-[#dce7ff] text-center text-2xl">Project</p>
      <div className="flex justify-center">
        <img src={notfound} alt="Not Found" />
      </div>
    </>
  );
};

export default Project;
