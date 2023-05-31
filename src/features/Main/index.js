import { Section } from "../../common/Section";
import { About } from "../../common/About";
import { Portfolio } from "../../common/Portfolio";
import { Wrapper } from "./styled";
import { myData } from "../../myData";
import { Footer } from "../../common/Footer";

export const Main = () => {
  return (
    <Wrapper>
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
