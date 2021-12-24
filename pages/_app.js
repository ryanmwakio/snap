import "tailwindcss/tailwind.css";
import "./styles.css";
import Navbar from "./../components/navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
