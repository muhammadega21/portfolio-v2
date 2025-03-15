import Navbar from "../components/layouts/_navbar";
import Footer from "../components/layouts/_footer";
import { tabTitle } from "../utils/generalFunctions";
import { About, Contact, Home, Project } from "../components/homeLayouts";
import { ScrollTop } from "primereact/scrolltop";
import SocialLink from "../components/layouts/_socialLinks";
import EmailLink from "../components/layouts/_emailLink";

function HomePage() {
  tabTitle("Ega | Portfolio");

  return (
    <>
      <Navbar />
      <main>
        <SocialLink />
        <EmailLink />
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
