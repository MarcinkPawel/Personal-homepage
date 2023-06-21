import { iconStyled } from "./styled";
import { ReactComponent as gitIcon } from "../../assets/gitIcon.svg";
import { ReactComponent as linkedIcon } from "../../assets/linkedIcon.svg";
import { myData } from "../../myData";

export const socialMediaList = [
  {
    name: "GitHub",
    url: `${myData.github}`,
    Icon: iconStyled(gitIcon),
  },
  {
    name: "LinkedIn",
    url: `${myData.linkedin}`,
    Icon: iconStyled(linkedIcon),
  },
];
