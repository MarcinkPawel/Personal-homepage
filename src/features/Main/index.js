import { Section } from "../../common/Section";
import { About } from "../About";
import { Portfolio } from "../Portfolio";
import { Wrapper } from "./styled";
import { personalData } from "../../personalData";
import { Footer } from "../Footer";
import { ThemeToggler } from "../ThemeToggle";

export const Main = () => (
  <Wrapper>
    <ThemeToggler />
    <About />
    <Section heading="My skillset includes 🛠️" skills={personalData.currentSkills} />
    <Section
      heading="What I want to learn next 🚀"
      skills={personalData.skillsToLearn}
    />
    <Portfolio />
    <Footer />
  </Wrapper>
);
