import { Tile, Title, Description, Label, LinkLabel, Link } from "./styled";

export const RepoTile = ({ id, name, description, homepage, html_url }) => (
  <Tile key={id}>
    <Title>{name}</Title>
    <Description>{description}</Description>
    <Label>
      <LinkLabel>Demo:</LinkLabel>
      <Link href={homepage} target="_blank" rel="noreferrer noopener">
        {homepage}
      </Link>
    </Label>
    <Label>
      <LinkLabel>Code:</LinkLabel>
      <Link href={html_url} target="_blank" rel="noreferrer noopener">
        {html_url}
      </Link>
    </Label>
  </Tile>
);
