import Navbar from "../components/layouts/navbar";
import Footer from "../components/layouts/footer";
import { tabTitle } from "../utils/generalFunctions";
import { About, Contact, Home, Project } from "../components/homeLayouts";
import { ScrollTop } from "primereact/scrolltop";
import SocialLink from "./../components/layouts/socialLinks";
import EmailLink from "./../components/layouts/emailLink";

function HomePage() {
  tabTitle("Ega | Portfolio");
  return (
    <>
      <Navbar />
      <main>
        <div
          className="absolute w-full h-[100dvh] hidden sm:block"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
        >
          <SocialLink />
        </div>
        <div
          className="absolute w-full h-[100dvh] hidden sm:block"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
        >
          <EmailLink />
        </div>
        <ScrollTop className="!w-[2rem] !h-[2rem] !rounded-full !bg-gray-700" />
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
