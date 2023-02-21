import CardImage from "../utility/CardImage";
import bb from "../../assets/img/bb.png";
import todolist from "../../assets/img/todolist.png";
import basicRest from "../../assets/img/basicRest.png";
import texteditorwebased from "../../assets/img/texteditorwebased.png";
import botDiscord from "../../assets/img/botdiscord.webp";

const Project = () => {
  return (
    <>
      <p className="text-[#dce7ff] text-center text-2xl mb-3">Project</p>
      <CardImage
        imgView={botDiscord}
        title="CTF Assistant"
        description="discord bot to make it easier to manage CTFs"
      />
      <CardImage
        imgView={bb}
        title="Bug Bounty Report Generator"
        description="a website that creates bug bounty reports instantly."
      />
      <CardImage
        imgView={todolist}
        title="Todo List"
        description="a website make Todo List."
      />
      <CardImage
        imgView={botDiscord}
        title="cuyUniverse"
        description="discord bot to make it easier to manage discord community server."
      />
      <CardImage
        imgView={basicRest}
        title="Basic Rest Client"
        description="a website Rest Client."
      />
      <CardImage
        imgView={texteditorwebased}
        title="Text Editor Web Based"
        description=""
      />
    </>
  );
};

export default Project;
