import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParallaxText from "./ParallaxText";

function Hero() {
  return (
    <div>
      <section id="home" className="flex flex-col justify-center items-center min-h-screen text-center px-6 ">
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }} className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-poppins">
          Hi, I'm a{" "}
          <span className="text-blue-400">
            <Typewriter
              words={["Front-End", "Web Developer", "Tech Enthusiast"]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }} className="text-lg md:text-2xl text-gray-400 mb-8">
          <p className="text-sm md:text-base mt-4 text-gray-400 max-w-lg">My passion lies in building the bridge between design and users through code. I'm Hioo, a front-end web developer enthusiastic about the digital world.</p>
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700"
        >
          Contact Me
        </motion.a>
        <br />
        <br />
        <div className="py-3 space-y-6">
          <ParallaxText baseVelocity={-3}>Front-End • Web Developer • UI • React • Tailwind •</ParallaxText>
          <ParallaxText baseVelocity={3}>Tech Enthusiast • Responsive Design • Animation •</ParallaxText>
        </div>
      </section>
    </div>
  );
}

export default Hero;
