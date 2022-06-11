import { NextPage } from "next";
import FancyGraphic from "../components/FancyGraphic/FancyGraphic";
import Navbar from "../components/Navbar/Navbar";
import SplitContentContainer from "../components/SplitContentContainer/SplitContentContainer";

const Contact: NextPage = () => {
  return (
    <SplitContentContainer navbar={<Navbar />}>
      <FancyGraphic />
      <main className="main">
        <h1 className="title">Contact</h1>
        <div>Here is my contact info!</div>
      </main>
    </SplitContentContainer>
  );
};

export default Contact;
