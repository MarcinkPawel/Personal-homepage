import { Section } from "../../common/Section";
import { About } from "../../common/About";
import { Portfolio } from "../../common/Portfolio";
import { Wrapper } from "./styled";

export const Main = () => {
    return (
        <Wrapper>
        <About />
      <Section heading={"czesc"} />
      <Section heading={"gsdfshgdfhd"} />
      <Portfolio />
        </Wrapper>
    )};