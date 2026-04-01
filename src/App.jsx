import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import Industries from "./components/Industries";
import Team from "./components/Team";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



// const styles = {
//   "@import":
//     "url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&family=Playfair+Display:wght@500;600&display=swap')",
// };

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&family=Playfair+Display:wght@500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --green-50: #E1F5EE;
    --green-100: #9FE1CB;
    --green-400: #1D9E75;
    --green-600: #0F6E56;
    --green-800: #085041;
    --gray-50: #F7F6F3;
    --gray-100: #EEEDE8;
    --gray-200: #D3D1C7;
    --gray-400: #888780;
    --gray-700: #444441;
    --gray-900: #1A1A18;
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'DM Sans', system-ui, sans-serif;
    --radius-md: 8px;
    --radius-lg: 14px;
    --radius-xl: 20px;
    --border: 0.5px solid rgba(0,0,0,0.1);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: #FAFAF8;
    color: var(--gray-900);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a { text-decoration: none; color: inherit; }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ─── ICONS ─── */


/* ─── APP ─── */
export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalCSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
