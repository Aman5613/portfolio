import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between  flex-col gap-5 lg:flex-row"
      id="about"
    >
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#464646] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm Aman Gupta, a Computer Science student specializing in Data
          Science at RGPV, Bhopal. I focus on full-stack web development and
          software engineering, with hands-on experience building MERN-stack
          applications, AI-powered projects, and production-ready interfaces.
        </p>

        <p className="text-[#464646] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I enjoy turning ideas into practical products with React.js, Node.js,
          Express.js, MongoDB, Tailwind CSS, and modern AI tools like RAG,
          vector databases, and LLM integrations.
        </p>

        <div className="mt-4 lg:mt-6">
          <p className="text-[#464646] text-sm/6 lg:text-base font-medium">
            A few things that define my work:
          </p>
          <ul className="mt-3 space-y-2 text-[#464646] text-sm/6 lg:text-base list-disc pl-5">
            <li>
              Built full-stack projects with React.js, Node.js, Express.js,
              MongoDB, Socket.io, and secure payment or authentication flows.
            </li>
            <li>
              Worked as a Technical Manager at KVF Startup &amp; PKSM Pizza and
              as a Technical Web Contributor for the RGPV Training and Placement
              Cell.
            </li>
            <li>
              Solved 200+ DSA problems on LeetCode and keep sharpening
              problem-solving through consistent practice and GitHub
              contributions.
            </li>
            <li>
              Comfortable with deployment, version control, and tools like Git,
              GitHub, Vercel, npm, Figma, and Chrome DevTools.
            </li>
          </ul>
        </div>

        <p className="text-[#464646] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I’m currently looking to grow through challenging internship or
          product roles where I can contribute to meaningful software and learn
          from strong engineering teams.
        </p>
      </motion.div>
    </div>
  );
}
