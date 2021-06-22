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

export const AllProjectsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 4rem;
`;

export const ProjectContainer = styled.li`
  position: relative;
  padding: 2rem 2rem 2.5rem;
  width: 300px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
  box-shadow: 0 1px 10px 5px lightgray;
  border-radius: 1rem;
  z-index: 1;

  .main-link:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .name {
    font-size: 3.2rem;
    font-weight: normal;
  }
  .mentor-source {
    position: relative;
    display: inline-block;
    margin-top: 1rem;
    margin-left: 1.6rem;
    font-size: 1.4rem;
    color: grey;
    z-index: 2;
    &:hover {
      transform: translate3d(0.5rem, 0, 0);
    }
  }
  .description {
    margin-top: 1rem;
    font-size: 1.6rem;
  }
`;
