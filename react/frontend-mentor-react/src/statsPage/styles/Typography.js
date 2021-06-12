import styled from "styled-components";

export const CardHeader = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  color: var(--mainParagraph);
  margin-bottom: 2rem;
  span {
    color: var(--accent);
  }
  @media screen and (min-width: 1440px) {
    font-size: 3.6rem;
    text-align: left;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.6rem")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  margin: ${(props) => (props.margin ? props.margin : "none")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "inherit")};

  &.media-left {
    @media screen and (min-width: 1440px) {
      text-align: left;
    }
  }
`;

export const StatNumber = styled(Text)`
  color: var(--mainParagraph);
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const StatLabel = styled(Text)`
  text-transform: uppercase;
  color: var(--statHeading);
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;
