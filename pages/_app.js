import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { DataProvider } from "../store/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <FontAwesomeIcon />
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
