import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="ai-footer">
      <div className="main-container">
        {/* TOP */}
        <motion.div
          className="ai-footer__upper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* LEFT */}
          <div className="ai-footer__about">
            <h4>
              Harsh <span className="ai-glow">Yadav</span>
            </h4>

            <p>
              I believe what makes us different is not that we never fail — but
              that we <strong>stand together</strong>, learn together, and grow
              as a team.
            </p>

            <p>
              We may disagree, we may struggle, but teamwork and trust are
              always stronger than individual success.
            </p>
          </div>

          {/* RIGHT */}
          <div className="ai-footer__links">
            <h5>Let’s stay connected</h5>

            <div className="ai-footer__socials">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* PHILOSOPHY */}
        <motion.blockquote
          className="ai-footer__quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          “Every ending carries the seed of a new beginning. Do not fear failure
          or success — both are teachers guiding us forward.”
        </motion.blockquote>

        {/* BOTTOM */}
        <div className="ai-footer__lower">
          <p>
            © {new Date().getFullYear()} Harsh Yadav · Built with patience,
            learning, and hope.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
