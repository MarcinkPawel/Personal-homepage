import { Tile, Title, Description, Label, Link } from "./styled";

export const RepoTile = ({ id, name, description, homepage, html_url }) => (
  <Tile key={id}>
    <Title>{name}</Title>
    <Description>{description}</Description>
    <Label>
      <Link href={homepage} target="_blank" rel="noreferrer noopener">
        Demo
      </Link>
      <Link href={html_url} target="_blank" rel="noreferrer noopener">
        Code{" "}
      </Link>
    </Label>
  </Tile>
);
