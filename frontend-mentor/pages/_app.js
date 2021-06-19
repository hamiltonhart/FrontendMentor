import "../main.css";
import { GlobalStyle } from "../components/global/styles/GlobalStyles";
import { Header } from "../components/global/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
