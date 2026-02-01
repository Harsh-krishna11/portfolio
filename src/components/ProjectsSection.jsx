import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/Projects";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

function ProjectsSection() {
  return (
    <section id="projects" className="ai-projects">
      <div className="main-container">
        {/* HEADER */}
        <motion.h2
          className="ai-projects__title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Projects <span className="ai-glow">Built Through Learning</span>
        </motion.h2>

        <motion.p
          className="ai-projects__intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          These projects are not made just to show output.
          <br />
          They represent <strong>effort</strong>, <strong>mistakes</strong>, and
          the <strong>ability to learn and improve</strong>.
        </motion.p>

        <motion.blockquote
          className="ai-projects__quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          “You have the right to perform your actions, but not to claim
          perfection — growth comes through effort.”
        </motion.blockquote>

        {/* PROJECT CARDS */}
        <div className="ai-projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="ai-project-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -10 }}
            >
              {/* IMAGE */}
              <div className="ai-project-card__image">
                <img src={project.image} alt={project.title} />
              </div>

              {/* CONTENT */}
              <div className="ai-project-card__content">
                <h3>{project.title}</h3>
                <span className="ai-project-card__period">
                  {project.period}
                </span>

                <div className="ai-project-card__tech">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="ai-tech-pill"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <p className="ai-project-card__desc">{project.description}</p>

                <ul className="ai-project-card__list">
                  {project.learnings.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>

                <div className="ai-project-card__links">
                  {Object.entries(project.links).map(([key, value]) => (
                    <a key={key} href={value} target="_blank" rel="noreferrer">
                      {key}
                    </a>
                  ))}
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="ai-project-card__btn"
                >
                  Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
