import { NextPage } from "next";

const Projects: NextPage = () => {
  return (
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
  );
};

export default Projects;
