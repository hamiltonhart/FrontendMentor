import { HeaderStyle } from "./styles/Header";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderStyle>
      <Link href="/">
        <a>
          <h1>Frontend Mentor Exercises</h1>
        </a>
      </Link>
    </HeaderStyle>
  );
};
