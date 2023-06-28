import { Tile, Title, Description, Label, Link } from "./styled";

export const RepoTile = ({ name, description, homepage, htmlUrl }) => (
  <Tile>
    <Title>{name}</Title>
    <Description>{description}</Description>
    <Label>
      <Link href={homepage} target="_blank" rel="noreferrer noopener">
        Demo
      </Link>
      <Link href={htmlUrl} target="_blank" rel="noreferrer noopener">
        Code{" "}
      </Link>
    </Label>
  </Tile>
);
