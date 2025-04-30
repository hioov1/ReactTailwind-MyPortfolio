import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParallaxText from "./components/ParallaxText";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative font-sans">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      <ParallaxText baseVelocity={-3}>Front-End • Web Developer • UI • React • Tailwind •</ParallaxText>
      <ParallaxText baseVelocity={3}>Tech Enthusiast • Responsive Design • Animation •</ParallaxText>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contacts Section */}
      <Contacts />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
