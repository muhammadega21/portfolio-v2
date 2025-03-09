import Aos from "aos";
import "aos/dist/aos.css";
import Particles from "../_Particles";
import RotatingText from "../_RotatingText";
import SplitText from "../_SplitText";

function Home() {
  Aos.init();
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
      <div className="h-full w-max pt-[80px] px-[10%] flex items-center ">
        <div>
          <div
            className="w-max mb-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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
          </div>
          <div
            className="w-max"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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
          </div>
          <div
            className="flex items-center gap-2 font-bold text-xl sm:text-3xl lg:text-4xl w-max "
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
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
          </div>
          <div
            className="max-w-screen w-[80%] sm:w-1/2 mt-4 overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
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
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <a
              className=" mybtn-outline relative mt-4 py-7 px-8 font-['Chivo_Mono'] text-base"
              href={"#project"}
            >
              Check Out My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
