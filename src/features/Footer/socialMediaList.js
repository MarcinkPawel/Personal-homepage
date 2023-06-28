import { iconStyled } from "./styled";
import { ReactComponent as gitIcon } from "../../assets/gitIcon.svg";
import { ReactComponent as linkedIcon } from "../../assets/linkedIcon.svg";
import { personalData } from "../../personalData";

export const socialMediaList = [
  {
    name: "GitHub",
    url: personalData.github,
    Icon: iconStyled(gitIcon),
  },
  {
    name: "LinkedIn",
    url: personalData.linkedin,
    Icon: iconStyled(linkedIcon),
  },
];
