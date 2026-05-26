import Header from "../components/Header";
import ProjectsPageContent from "../components/Projects/page";

export default function ProjectsRoute() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />

      <div className="pt-10 max-w-7xl mx-auto px-6">
        <ProjectsPageContent />
      </div>
    </main>
  );
}
