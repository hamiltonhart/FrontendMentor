import Head from "next/head";
import {
  MainContainer,
  PageHeadingContainer,
  AllProjectsContainer,
} from "../components/homepage/styles/Containers";
import {
  PageHeading,
  PageDescription,
} from "../components/homepage/styles/Typography";
import { ProjectCard } from "../components/homepage/ProjectCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor Exercises</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <PageHeadingContainer>
          <PageHeading>Welcome!</PageHeading>
          <PageDescription>
            This site contains various coding projects that I've completed from
            the Frontend Mentor site. This allows me to practice without having
            to worry about what to make. Unless noted, nothing on any of the
            pages below was designed by me.
          </PageDescription>
          <PageDescription>
            I'm using NextJS as the basis for the site and Styled-Components for
            the styling. If other technologies are used for any of the projects,
            it will be noted in the description.
          </PageDescription>
        </PageHeadingContainer>

        <AllProjectsContainer>
          <ProjectCard
            name="Stat Preview"
            pageLink=""
            sourceLink="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62"
            description="A simple, responsive card challenge."
          />
        </AllProjectsContainer>
      </MainContainer>
    </div>
  );
}
