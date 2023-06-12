import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myData } from "../../myData";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../../features/getGitData/gitDataSlice";
import {
  Wrapper,
  Header,
  Icon,
  Heading,
  SubHeading,
  TailsList,
  RepoContainer,
} from "./styled";
import { RepoTile } from "./RepoTile";
import { Loading } from "./Loading";
import { ErrorNotice } from "./Error";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(myData.githubUsername));
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>
        <Icon />
        <Heading>Portfolio</Heading>
        <SubHeading>My recent projects</SubHeading>
      </Header>
      <RepoContainer>
        {(() => {
          switch (repositoriesStatus) {
            case "initial":
              return null;

            case "loading":
              return <Loading />;

            case "error":
              return <ErrorNotice />;

            case "success":
              return (
                <TailsList repositories={repositories}>
                  {repositories.map(
                    ({ id, name, description, homepage, html_url }) => (
                      <RepoTile
                        key={id}
                        name={name}
                        description={description}
                        homepage={homepage}
                        html_url={html_url}
                      />
                    )
                  )}
                </TailsList>
              );

            default:
              throw new Error(`incorrect status: ${repositoriesStatus}`);
          }
        })()}
      </RepoContainer>
    </Wrapper>
  );
};
