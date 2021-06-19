import styled from "styled-components";

export const MainImage = styled.img`
  border-top-left-radius: var(--cardBorderRadius);
  border-top-right-radius: var(--cardBorderRadius);
  max-width: 200px;
  mix-blend-mode: multiply;
  object-fit: cover;
  background-color: red;

  @media screen and (min-width: 1440px) {
    border-top-left-radius: unset;
    border-bottom-right-radius: var(--cardBorderRadius);
  }
`;
