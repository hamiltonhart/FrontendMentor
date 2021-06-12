import styled from "styled-components";
import mobileBG from "../images/image-header-mobile.jpg";
import desktopBG from "../images/image-header-desktop.jpg";

export const MainContainerStyle = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  background-color: var(--mainBackground);
  margin-left: auto;
  margin-right: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  width: 100%;
  min-height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--cardBorderRadius);
  max-width: 350px;
  ${(props) => props.center && "margin: 0 auto;"}

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 1200px;
  }
`;

export const ImageContainer = styled.div`
  background-color: var(--accent);
  overflow: hidden;
  width: 100%;
  height: 250px;
  border-top-left-radius: var(--cardBorderRadius);
  border-top-right-radius: var(--cardBorderRadius);
  background-image: url(${mobileBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;

  @media screen and (min-width: 1440px) {
    grid-column: 2;
    border-top-left-radius: unset;
    height: 100%;
    border-bottom-right-radius: var(--cardBorderRadius);
    border-top-right-radius: var(--cardBorderRadius);
    background-image: url(${desktopBG});
  }
`;

export const StatsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cardBackground);
  padding: 3.5rem 4rem;
  border-bottom-left-radius: var(--cardBorderRadius);
  border-bottom-right-radius: var(--cardBorderRadius);

  @media screen and (min-width: 1440px) {
    grid-column: 1;
    grid-row: 1;
    border-bottom-right-radius: unset;
    border-top-left-radius: var(--cardBorderRadius);
    padding: 8rem 8rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  margin: ${(props) => (props.margin ? props.margin : "inhert")};
  & > * {
    margin: ${(props) => (props.itemSpacing ? props.itemSpacing : "0")};
  }

  &.flex-swap {
    @media screen and (min-width: 1440px) {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 6rem;
    }
  }
`;

export const Div = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "inhert")};
`;
