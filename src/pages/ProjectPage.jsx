import Footer from "../components/layouts/footerLayout";
import Navbar from "../components/layouts/navbarLayout";
import { tabTitle } from "../utils/generalFunctions";

function ProjectPage() {
  tabTitle("Ega | Projects");
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}

export default ProjectPage;
