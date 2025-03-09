import Footer from "../components/layouts/footer";
import Navbar from "../components/layouts/navbar";
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
