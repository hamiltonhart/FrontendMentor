import Link from "next/link";
import { ProjectContainer } from "./styles/Containers";

export const ProjectCard = ({ pageLink, name, sourceLink, description }) => {
  return (
    <ProjectContainer>
      <Link href={pageLink}>
        <a className="main-link">
          <h3 className="name">{name}</h3>
        </a>
      </Link>
      <a href={sourceLink} target="_blank" className="mentor-source">
        {`See on Frontend Mentor >`}
      </a>
      <p className="description">{description}</p>
    </ProjectContainer>
  );
};
