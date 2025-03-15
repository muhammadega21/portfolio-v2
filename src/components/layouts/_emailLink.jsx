import { motion } from "framer-motion";
function EmailLink() {
  const animateFadeUp = {
    initial: { opacity: 0, y: "20%" },
    whileInView: { opacity: 0.8, y: 0 },
    transition: { ease: "easeOut", duration: 1 },
    viewport: { once: true },
  };
  return (
    <motion.div className="emailLink-parent" {...animateFadeUp}>
      <div className="emailLink">
        <a href="mailto:dermawane988@gmail.com">dermawane988@gmail.com</a>
      </div>
    </motion.div>
  );
}

export default EmailLink;
