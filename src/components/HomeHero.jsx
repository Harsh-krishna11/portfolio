import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

function HomeHero() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate("/"); // ensure home page
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section className="ai-hero">
      {/* background glow */}
      <div className="ai-hero__bg-glow" />

      <motion.div
        className="ai-hero__content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* NAME */}
        <motion.h1
          className="ai-hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I’m <span className="ai-glow">Harsh Yadav</span>
        </motion.h1>

        {/* TYPEWRITER */}
        <motion.h2
          className="ai-hero__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Typewriter
            words={[
              "A Frontend Developer with a different way of thinking.",
              "Someone who believes hope is more powerful than fear.",
              "Building interfaces that give people umeed.",
              "Learning every day. Growing every day.",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={45}
            deleteSpeed={25}
            delaySpeed={1800}
          />
        </motion.h2>

        {/* MESSAGE */}
        <motion.p
          className="ai-hero__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          I’m a frontend developer who doesn’t just write code —
          <br />I try to build <strong>clarity</strong>,{" "}
          <strong>confidence</strong>, and
          <strong> hope</strong>.
          <br />
          <br />
          <em>
            “Ek umeed hoti hai — ki sab ho jaega. Wahi umeed kaam karne ka
            zariya banti hai, aur wahi safalta tak le jaati hai.”
          </em>
          <br />
          <br />I believe in continuous learning, calm thinking, and growing a
          little better every single day.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="ai-hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <button
            className="ai-btn-primary"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </button>

          <button
            className="ai-btn-secondary"
            onClick={() => scrollToSection("contact")}
          >
            Let’s Talk
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeHero;
