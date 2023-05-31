import { iconStyled } from "./styled";
import { ReactComponent as gitIcon } from "../../images/gitIcon.svg";
import { ReactComponent as linkedIcon } from "../../images/linkedIcon.svg";


export const socialMediaList = [
    {
        name: "GitHub",
        url: "https://github.com/MarcinkPawel",
        Icon: iconStyled(gitIcon),
    },
    {
        name: "LinkedIn",
        url: "https://google.com/",
        Icon: iconStyled(linkedIcon),
    },
];