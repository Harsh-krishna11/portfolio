import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/Projects";
import VFXParticles from "../components/VFXParticles";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Project() {
  const { id } = useParams();
  console.log(id);

  const project = projects.find((p) => p.id === id);
  console.log(project);

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <>
      {/* HERO */}
      <div className="ai-project-page">
        <div className="ai-project-page__bg">
          <VFXParticles />
        </div>
        <section className="ai-project-hero">
          <motion.div
            className="ai-project-hero__content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.emotion && <span>{project.emotion}</span>}
          </motion.div>
        </section>

        {/* MAIN CONTENT */}
        <section className="ai-project-details">
          <div className="main-container">
            {/* IMAGE + LEARNINGS */}
            <div className="ai-project-layout">
              {/* IMAGE */}
              <motion.div
                className="ai-project-image"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src={project.image} alt={project.title} />
              </motion.div>

              {/* LEARNINGS */}
              <motion.div
                className="ai-project-learnings"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3>What I Learned</h3>

                <div className="ai-learning-list">
                  {project.learnings.map((item, i) => (
                    <motion.div
                      key={i}
                      className="ai-learning-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <h3 className="mt">Tools & Technologies</h3>

                <div className="ai-project-tech">
                  {project.tech.map((tool, i) => (
                    <span key={i}>{tool}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* PHILOSOPHY */}
            <motion.blockquote
              className="ai-project-quote"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {project.philosophy}
            </motion.blockquote>

            {/* LINKS */}
            <div className="ai-project-links">
              {Object.entries(project.links).map(([key, value]) => (
                <a key={key} href={value} target="_blank" rel="noreferrer">
                  {key}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Project;
