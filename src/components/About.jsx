import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between  flex-col gap-5 lg:flex-row" id="about">
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
Hi, I'm Aman Gupta — a passionate web developer and CSE (Data Science) student at RGPV, Bhopal. I enjoy building clean, responsive websites using technologies like React.js, Tailwind CSS, and the MERN stack. I'm also skilled in Java, JavaScript, Python, and have solved 200+ DSA problems on LeetCode.        </p>

        {/* <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Currently, I'm pursuing a B.Tech in Computer Science and Engineering (Data Science) at RGPV, Bhopal. I'm exploring the MERN stack, gaining knowledge in Node.js, Express.js, and MongoDB, while actively contributing to open-source projects and hackathons.        </p> */}

        <p className="text-[#464646] text-sm/6 lg:text-base mt-3 lg:mt-5">
        Some highlights about me:
        <ol>
          <li>- Skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS, Framer and GSAP</li>
          <li>- Experienced with Git, GitHub, VS Code, Chrome DevTools, and deployment on Vercel and GitHub Pages</li>
          <li>- Comfortable with tools like npm, Redux, Redux Toolkit, JSON, and Figma</li>
          <li>- Developed projects including an AI ChatBot and a responsive landing page UI</li>
          <li>- Achieved 200+ Data Structure & Algorithm problems solved on LeetCode</li>
        </ol>
        </p>

        {/* <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond academics and coding, I've earned recognition in national-level hackathons and competitions, demonstrating my commitment to practical learning, teamwork, and excellence. I am always eager to join development teams as an intern, learn from experienced mentors, and contribute meaningfully to impactful projects.        </p> */}

      </motion.div>
    </div>
  );
}
