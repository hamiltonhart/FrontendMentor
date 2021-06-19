import styled from "styled-components";

export const MainImage = styled.img`
  border-top-left-radius: var(--cardBorderRadius);
  border-top-right-radius: var(--cardBorderRadius);
  max-width: 100%;
  mix-blend-mode: multiply;
  object-fit: cover;

  @media screen and (min-width: 1440px) {
    border-top-left-radius: unset;
    border-bottom-right-radius: var(--cardBorderRadius);
  }
`;
