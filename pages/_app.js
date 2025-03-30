// pages/_app.js
import { ThemeProvider } from "@/contexts/ThemeContext";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* Metadados básicos */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
