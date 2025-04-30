import { motion } from "framer-motion";

// src/components/Skills.jsx
const skills = [
  { name: "HTML", icon: "/assets/svg/html.svg" },
  { name: "CSS", icon: "/assets/svg/css.svg" },
  { name: "JavaScript", icon: "/assets/svg/javascript.svg" },
  { name: "React", icon: "/assets/svg/react.svg" },
  { name: "TailwindCSS", icon: "/assets/svg/tailwindcss.svg" },
  { name: "Bootstrap", icon: "/assets/svg/bootstrap.svg" },
  { name: "Git", icon: "/assets/svg/git.svg" },
];

const certificates = [
  {
    title: "Front-End Web Development",
    issuer: "Dicoding",
    date: "2025",
    url: "#",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "Dicoding",
    date: "2025",
    url: "#",
  },
  {
    title: "Backend Development with Node.js",
    issuer: "Dicoding",
    date: "2025",
    url: "#",
  },
  {
    title: "Cloud and Gen AI Amazon Web Services",
    issuer: "Dicoding",
    date: "2025",
    url: "#",
  },
];

const Skills = () => {
  return (
    <section className="bg-slate-950 text-white py-10 px-6 md:px-16 lg:px-32">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.5 }} className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins">Skills</h2>
        {/* Skills Section */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center items-center">
          {skills.map((skill, index) => (
            <motion.div key={index} whileHover={{ scale: 1.15 }} className="flex flex-col items-center justify-center space-y-2 p-3 bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-lg">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <p className="text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center space-y-9">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            <span className="text-blue-400">Bootcamp</span> Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block bg-gray-800 rounded-xl p-6 text-left space-y-2 shadow-md hover:bg-gray-700 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="text-gray-400 text-sm">Issued by: {cert.issuer}</p>
                <p className="text-gray-500 text-sm">Year: {cert.date}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
