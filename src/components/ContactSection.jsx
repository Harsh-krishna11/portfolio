import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function ContactSection() {
  return (
    <section id="contact" className="ai-contact">
      <div className="main-container">
        {/* TITLE */}
        <motion.h2
          className="ai-contact__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Let’s <span className="ai-glow">Connect</span>
        </motion.h2>

        {/* INTRO TEXT */}
        <motion.p
          className="ai-contact__intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          We are humans before we are professionals.
          <br />
          Growth happens when thoughts are shared, questions are asked, and
          conversations begin.
        </motion.p>

        {/* PHILOSOPHY */}
        <motion.blockquote
          className="ai-contact__quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          “When actions are guided by sincerity, and communication by
          understanding, progress follows naturally.”
        </motion.blockquote>

        {/* FORM */}
        <motion.form
          className="ai-contact__form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="ai-field">
            <label>Your Name</label>
            <input type="text" placeholder="How should I address you?" />
          </div>

          <div className="ai-field">
            <label>Your Email</label>
            <input type="email" placeholder="Where can I reach you?" />
          </div>

          <div className="ai-field">
            <label>Your Message</label>
            <textarea
              rows="5"
              placeholder="Share your thoughts, ideas, or opportunities…"
            />
          </div>

          <motion.button
            type="submit"
            className="ai-contact__btn"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Start the Conversation →
          </motion.button>
        </motion.form>

        {/* FOOT NOTE */}
        <motion.p
          className="ai-contact__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
        >
          I believe conversations create clarity.
          <br />
          And clarity is where meaningful work begins.
        </motion.p>
      </div>
    </section>
  );
}

export default ContactSection;
