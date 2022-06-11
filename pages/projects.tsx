import { NextPage } from "next";
import FancyGraphic from "../components/FancyGraphic/FancyGraphic";
import Navbar from "../components/Navbar/Navbar";
import SplitContentContainer from "../components/SplitContentContainer/SplitContentContainer";

const Projects: NextPage = () => {
  return (
    <SplitContentContainer navbar={<Navbar />}>
      <FancyGraphic />
      <main className="main">
        <h1 className="title">Projects</h1>
        <div>
          <p>Here are all my coolest projects!</p>
          <ul>
            <li>Shoevox</li>
            <li>Microblogging Platform</li>
            <li>Some fun webgl thing</li>
            <li>Rework of battleship project</li>
          </ul>
        </div>
      </main>
    </SplitContentContainer>
  );
};

export default Projects;
