import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsComponent from "../components/ProjectsComponent";
import Reveal from "../components/Reveal";
import PageTitle from "../components/PageTitle";

function ProjectsPage() {
  return (
    <>
      <PageTitle page='projects' />
      <Navbar />
      <main>
        <Reveal>
          <ProjectsComponent asPage />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

export default ProjectsPage;
