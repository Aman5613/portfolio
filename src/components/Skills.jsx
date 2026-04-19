import { motion } from "framer-motion";
import { skills } from "..";

export default function Skills() {
  const experiences = [
    {
      id: 1,
      company: "KVF Startup & PKSM Pizza",
      role: "Technical Manager",
      period: "2026 - Present",
      description:
        "Directed operations and built the core technical infrastructure for a scalable food delivery platform using React.js, Node.js, MongoDB, RBAC, REST APIs, WebSockets, and secure payment integration.",
      logo: null,
    },
    {
      id: 2,
      company: "Training and Placement Cell, RGPV",
      role: "Technical Web Contributor",
      period: "2025",
      description:
        "Maintained and contributed to the university placement cell web platforms, coordinating with administrative staff and developers to keep the user experience smooth for students.",
      logo: null,
    },
  ];

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-600 lg:text-base">
          Core tools and technologies reflected in my resume, focused on
          full-stack development, deployment, and modern web application
          workflows.
        </p>

        {/* Skill Cards */}
        <div className="mt-7 grid w-full grid-cols-2 place-items-center gap-5 gap-y-6 text-lg font-bold md:grid-cols-4 lg:mt-16 lg:grid-cols-5 lg:gap-y-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex h-36 w-36 cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-black bg-white p-3 text-center transition-all hover:-translate-y-1 hover:bg-black hover:text-white lg:h-44 lg:w-44"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <skill.icon size={50} />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        <p className="mx-auto mt-3 max-w-2xl px-5 text-center text-sm text-zinc-400 lg:px-0 lg:text-base">
          Selected work, volunteer, and hackathon experience pulled from the
          resume.
        </p>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="cursor-pointer rounded-2xl border border-[#3f3f46] bg-black p-5 transition-all hover:bg-[#18181b]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  {exp.logo ? (
                    <img
                      className="w-8 rounded-full bg-white/5 p-1"
                      src={exp.logo}
                      alt=""
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-600 text-xs font-semibold text-white">
                      {exp.company
                        .split(" ")
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  )}
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
