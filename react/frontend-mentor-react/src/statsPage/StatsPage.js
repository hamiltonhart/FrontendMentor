import { GlobalStyle } from "./styles/GlobalStyles";
import {
  Card,
  MainContainerStyle,
  ImageContainer,
  StatsTextContainer,
  FlexContainer,
} from "./styles/Containers";
import { MainImage } from "./styles/Images";
import DesktopImage from "./images/image-header-desktop.jpg";
import { CardHeader, StatLabel, StatNumber, Text } from "./styles/Typography";

export const StatsPage = () => {
  const stats = [
    ["10k+", "Companies"],
    ["314", "Templates"],
    ["12M+", "Queries"],
  ];

  return (
    <>
      <GlobalStyle />
      <MainContainerStyle>
        <Card center>
          <ImageContainer>
            {/* <MainImage
              src={DesktopImage}
              alt="People working at a communal desk."
            /> */}
          </ImageContainer>
          <StatsTextContainer>
            <CardHeader>
              Get <span>insights</span> that help your business grow.
            </CardHeader>
            <Text
              className="media-left"
              color="var(--statHeading)"
              textAlign="center"
              lineHeight="2.5rem"
            >
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </Text>
            <FlexContainer
              className="flex-swap"
              flexDirection="column"
              margin="2rem 0 0 0"
              justifyContent="center"
              alignItems="center"
              itemSpacing="2rem 0 0 0"
            >
              {stats.map((stat) => (
                <div>
                  <StatNumber>{stat[0]}</StatNumber>
                  <StatLabel>{stat[1]}</StatLabel>
                </div>
              ))}
            </FlexContainer>
          </StatsTextContainer>
        </Card>
      </MainContainerStyle>
    </>
  );
};
