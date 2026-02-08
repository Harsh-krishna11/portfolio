import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function AboutSection() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("ENGINE INIT");
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  return (
    <section id="about" className="ai-about">
      {/* AI PARTICLES */}
      {engineReady && (
        <Particles
          className="ai-about__particles"
          options={{
            fullScreen: {
              enable: false,
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: { enable: false },
                onClick: { enable: false },
                resize: true,
              },
            },
            background: {
              color: "transparent",
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#00eaff",
              },
              opacity: {
                value: 0.7,
              },
              size: {
                value: 5,
              },
              move: {
                enable: true,
                speed: 5,
              },
              links: {
                enable: true,
                distance: 150,
                color: "#00eaff",
                opacity: 0.8,
              },
            },
          }}
        />
      )}

      <div className="main-container ai-about__content">
        {/* TITLE */}
        <motion.h2
          className="ai-about__title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About <span className="ai-glow">Me</span>
        </motion.h2>

        {/* TOP GRID */}
        <div className="ai-about__grid">
          {/* LEFT */}
          <motion.div
            className="ai-about__text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h3>I’m not perfect — I’m conscious.</h3>

            <p>
              I am a <strong>Frontend Developer</strong> who doesn’t chase
              perfection to show off. I believe in{" "}
              <strong>continuous effort</strong>, clarity of thought, and honest
              growth.
            </p>

            <p>
              I know my strengths. I accept my weaknesses. And I learn from
              both.
            </p>

            <blockquote>
              When one acts with sincerity, learns from mistakes, and stays
              aligned with truth — progress becomes inevitable.
            </blockquote>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="ai-about__side"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="ai-about__card">
              <h4>Technical Skills</h4>
              <div className="ai-skills-layout">
                <div className="ai-skills-group">
                  <h5>Programming Languages</h5>
                  <div className="ai-skills">
                    {["C++", "Java", "JavaScript", "Python", "HTML", "CSS"].map(
                      (skill, i) => (
                        <span key={i} className="ai-skill">
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="ai-skills-group">
                  <h5>Core Concepts</h5>
                  <div className="ai-skills">
                    {["Data Structures", "Algorithms", "Problem Solving"].map(
                      (skill, i) => (
                        <span key={i} className="ai-skill">
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="ai-skills-group">
                  <h5>Frontend</h5>
                  <div className="ai-skills">
                    {["React.js", "Redux", "Tailwind CSS"].map((skill, i) => (
                      <span key={i} className="ai-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ai-skills-group">
                  <h5>Backend</h5>
                  <div className="ai-skills">
                    {["Node.js", "Express.js", "Mongoose"].map((skill, i) => (
                      <span key={i} className="ai-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ai-skills-group">
                  <h5>Databases</h5>
                  <div className="ai-skills">
                    {["MongoDB", "Firebase"].map((skill, i) => (
                      <span key={i} className="ai-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FULL WIDTH PHILOSOPHY */}
        <motion.div
          className="ai-about__philosophy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p>
            Wherever I work, I treat that place like <strong>my own</strong>.
            The people I work with become my family.
          </p>

          <p>
            I believe hope is powerful.{" "}
            <em>
              That one belief — <strong>“sab ho jaega”</strong> — becomes the
              reason we keep learning, keep improving, and keep moving forward.
            </em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
