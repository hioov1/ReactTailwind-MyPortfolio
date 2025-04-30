// src/components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-32">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.5 }} className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
          <span className="text-blue-400">About</span> Me
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Hello, my name is Hioo, I am a front-end web developer based in Serang, Banten, Indonesia. I have a strong enthusiasm for continuously learning the latest developments in the world of programming, especially in the realm of
          front-end development.
        </p>
        <p className="text-gray-400 text-sm md:text-base">"Building the web with code and creativity."</p>
      </motion.div>
    </section>
  );
};

export default About;
