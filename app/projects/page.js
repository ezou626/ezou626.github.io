import ProjectBoard from "../../components/projectBoard";
import projects from "./projectData";

export const metadata = {
  title: "Projects",
};

export default function ProjectPage() {
  return (
    <main className="h-full px-10 overflow-y-clip space-y-5 py-16 animate-revealbody max-w-5xl mx-auto">
      <ProjectBoard projects={projects}></ProjectBoard>
    </main>
  );
}
