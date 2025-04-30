import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <section id="contact" className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-32">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.5 }} className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins">
          Get in <span className="text-blue-300">Touch</span>
        </h2>
        <p className="text-gray-400">I'm currently open to new opportunities or collaborations. Feel free to reach out via email or my social links below.</p>

        {
          <form className="mt-6 space-y-4">
            <input className="w-full p-3 rounded bg-gray-800 text-white" placeholder="Your Name" />
            <input className="w-full p-3 rounded bg-gray-800 text-white" placeholder="Your Email" />
            <textarea className="w-full p-3 rounded bg-gray-800 text-white" placeholder="Your Message" rows="4" />
            <button className="bg-blue-400 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition">Send</button>
          </form>
        }
      </motion.div>
    </section>
  );
};

export default Contacts;
