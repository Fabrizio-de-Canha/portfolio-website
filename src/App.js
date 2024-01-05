import "./app.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About Me">About Me</section>
      <section id="Skills">Skills</section>
      {/* <section id="Projects">Test</section> */}
      <div id="Projects">
        <Portfolio id="Projects"/>
      </div>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
