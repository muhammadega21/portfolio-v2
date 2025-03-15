import Particles from "../_Particles";
import RotatingText from "../_RotatingText";
import SplitText from "../_SplitText";
import { motion } from "framer-motion";

function Home() {
  const animateFadeUp = {
    initial: { opacity: 0, y: "100px" },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  const animateZoomIn = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { ease: "easeOut", duration: 0.7 },
    viewport: { once: true },
  };
  return (
    <section>
      <div className="absolute w-full h-[100dvh]">
        <Particles
          particleColors={["#fff", "#fff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="h-screen w-max py-0 sm:py-[80px] px-[5%] sm:px-[10%] flex items-center">
        <div>
          <motion.div className="w-max mb-2 sm:mb-4" {...animateZoomIn}>
            <SplitText
              text="Hi, my name is"
              className="text-sm md:text-lg text-center font-[Chivo_Mono]"
              delay={40}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(50px,0,0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </motion.div>
          <motion.div className="w-max" {...animateZoomIn}>
            <SplitText
              text="Mhd. Ega Dermawan"
              className="text-[27px] sm:text-5xl lg:text-6xl font-extrabold text-center !text-wrap"
              delay={40}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(50px,0,0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </motion.div>
          <motion.div
            className="flex items-center gap-2 font-bold text-xl sm:text-3xl lg:text-4xl w-max "
            {...animateZoomIn}
          >
            <RotatingText
              texts={["Frontend", "Backend"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-(--color-primary) text-(--color-background) overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <h2 className="text-gray-300">Web Developer</h2>
          </motion.div>
          <motion.div
            className="max-w-screen w-[80%] sm:w-1/2 mt-4 overflow-hidden"
            {...animateZoomIn}
          >
            <SplitText
              text="I'm a junior Fullstack Web Developer passionate about creating interactive applications and experiences on the web."
              className="text-lg text-center text-gray-300"
              delay={25}
              animationFrom={{ opacity: 0, transform: "translate3d(50px,0,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </motion.div>
          <motion.div {...animateFadeUp}>
            <a
              className=" mybtn-outline relative mt-4 py-7 px-8 font-['Chivo_Mono'] text-base"
              href={"#project"}
            >
              Check Out My Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
