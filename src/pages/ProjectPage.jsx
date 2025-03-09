import Footer from "../components/layouts/_footer";
import Navbar from "../components/layouts/_navbar";
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
