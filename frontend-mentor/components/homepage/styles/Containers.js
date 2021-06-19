import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const PageHeadingContainer = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
`;

export const AllProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 4rem;
`;

export const ProjectContainer = styled.article`
  padding: 1rem;
  width: 300px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
  box-shadow: 0 1px 10px 5px lightgray;

  .name {
    font-size: 3.2rem;
    font-weight: normal;
    &:hover {
      font-weight: bold;
    }
  }
  .mentor-source {
    display: inline-block;
    margin-top: 1rem;
    margin-left: 1.6rem;
    font-size: 1.4rem;
    color: grey;
    &:hover {
      transform: translate3d(0.5rem, 0, 0);
    }
  }

  .description {
    margin-top: 1rem;
    font-size: 1.6rem;
  }
`;
