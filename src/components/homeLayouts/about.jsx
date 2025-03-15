import TiltedCard from "./../_TiltedCard";
import img from "./../../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faLaravel,
  faNode,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
function About() {
  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  const techItems = [
    { icon: faHtml5, label: "HTML5" },
    { icon: faCss3Alt, label: "CSS" },
    { icon: faJs, label: "JavaScript" },
    { icon: faPhp, label: "PHP" },
    { icon: faNode, label: "NodeJs" },
    { icon: faReact, label: "ReactJs" },
    { icon: faLaravel, label: "Laravel" },
  ];

  const animateFadeUp = {
    initial: { opacity: 0, y: "100%" },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true },
  };

  const animateFadeRight = {
    initial: { opacity: 0, x: "100%" },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true },
  };

  return (
    <section id="about" className="bg-(--color-background2) relative z-10 ">
      <div className="h-full py-[80px] px-[5%] sm:px-[10%] ">
        <motion.div className="section-title" {...animateFadeUp}>
          <h2>Know About Me</h2>
          <h1>Introduction & Tech I Use</h1>
        </motion.div>
        <div className="mt-10">
          <div className="flex flex-col-reverse lg:flex-row gap-15 lg:gap-30 justify-between items-center">
            <div className="text-justify opacity-90 ">
              <motion.p {...animateFadeUp}>
                Hello! I&apos;m Muhammad Ega Dermawan, a front-end web developer
                passionate about creating innovative and user-friendly
                experiences. With a strong background in computer science and a
                keen eye for detail, I am dedicated to delivering high-quality
                solutions that meet and exceed client expectations.
              </motion.p>
              <motion.p className="mt-5" {...animateFadeUp}>
                I have over 4 years of experience in web development, with
                projects that range from e-commerce platforms to custom web
                applications. I have expertise in HTML, CSS, JavaScript, and
                Laravel. I also have a strong understanding of Agile development
                methodologies and good skills in problem solving and attention
                to detail.
              </motion.p>
            </div>
            <motion.div
              className="w-max"
              {...animateFadeRight}
              initial={
                isMobile ? { opacity: 0, x: "100px" } : { opacity: 0, x: "25%" }
              }
            >
              <TiltedCard
                imageSrc={img}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={true}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </motion.div>
          </div>
          <div className="tech  mt-10 lg:mt-20 flex flex-wrap justify-center gap-x-3 md:gap-x-10 gap-y-3 sm:gap-y-10 px-0 lg:px-20">
            {techItems.map((item, index) => (
              <motion.span
                key={item.label}
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="icon transition-all duration-200"
                />
                {item.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
