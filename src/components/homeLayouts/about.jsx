import TiltedCard from "./../_TiltedCard";
import img from "./../../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faLaravel,
  faNode,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <section id="about" className="bg-(--color-background2) relative z-10 ">
      <div className="h-full py-[80px] px-[5%] sm:px-[10%] ">
        <div className="section-title">
          <h2>Know About Me</h2>
          <h1>Introduction & Tech I Use</h1>
        </div>
        <div className="mt-10">
          <div className="flex flex-col-reverse sm:flex-row gap-15 sm:gap-30 justify-between items-center">
            <div className="text-justify opacity-90 ">
              <p>
                Hello! I&apos;m Muhammad Ega Dermawan, a front-end web developer
                passionate about creating innovative and user-friendly
                experiences. With a strong background in computer science and a
                keen eye for detail, I am dedicated to delivering high-quality
                solutions that meet and exceed client expectations.
              </p>
              <p className="mt-5">
                I have over 4 years of experience in web development, with
                projects that range from e-commerce platforms to custom web
                applications. I have expertise in HTML, CSS, JavaScript, and
                Laravel. I also have a strong understanding of Agile development
                methodologies and good skills in problem solving and attention
                to detail.
              </p>
            </div>
            <div className=" w-max ">
              <TiltedCard
                imageSrc={img}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </div>
          <div className="tech">
            <span>
              <FontAwesomeIcon icon={faHtml5} className="icon" />
              HTML5
            </span>
            <span>
              <FontAwesomeIcon icon={faCss3Alt} className="icon" />
              CSS
            </span>
            <span>
              <FontAwesomeIcon icon={faJs} className="icon" />
              JavaSciprt
            </span>
            <span>
              <FontAwesomeIcon icon={faPhp} className="icon" />
              PHP
            </span>
            <span>
              <FontAwesomeIcon icon={faPython} className="icon" />
              Python
            </span>
            <span>
              <FontAwesomeIcon icon={faNode} className="icon" />
              NodeJs
            </span>
            <span>
              <FontAwesomeIcon icon={faReact} className="icon" />
              ReactJs
            </span>
            <span>
              <FontAwesomeIcon icon={faLaravel} className="icon" />
              Laravel
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
