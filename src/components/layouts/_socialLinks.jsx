import { motion } from "framer-motion";
function SocialLink() {
  const animateFadeUp = {
    initial: { opacity: 0, y: "20%" },
    whileInView: { opacity: 0.8, y: 0 },
    transition: { ease: "easeOut", duration: 1 },
    viewport: { once: true },
  };
  return (
    <motion.div className="socialLink" {...animateFadeUp}>
      <a href="https://github.com/muhammadega21" target="_blank">
        <i className="ri-github-line "></i>
      </a>
      <a href="https://www.instagram.com/ega_0.2/" target="_blank">
        <i className="ri-instagram-line"></i>
      </a>
      <a href="facebook.com/ega.dermawan.280899" target="_blank">
        <i className="ri-facebook-fill"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-ega-dermawan-1a21a729a/"
        target="_blank"
      >
        <i className="ri-linkedin-fill"></i>
      </a>
    </motion.div>
  );
}

export default SocialLink;
