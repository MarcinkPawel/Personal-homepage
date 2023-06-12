import { SpinnerStyled, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    Please wait, projects are being loaded...
    <SpinnerStyled />
  </Wrapper>
);
