import { Section } from "../../common/Section";
import { About } from "../../common/About";
import { Portfolio } from "../../common/Portfolio";
import { Wrapper } from "./styled";
import { myData } from "../../myData";
import { Footer } from "../../common/Footer";
import { ThemeToggler } from "../ThemeToggle";

export const Main = () => {
  return (
    <Wrapper>
      <ThemeToggler />
      <About />
      <Section
        heading="My skillset includes 🛠️"
        skills={myData.currentSkills}
      />
      <Section
        heading="What I want to learn next 🚀"
        skills={myData.skillsToLearn}
      />
      <Portfolio />
      <Footer />
    </Wrapper>
  );
};
