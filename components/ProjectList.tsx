
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "JavaScript Quiz App",
        description:
            "An interactive quiz application for testing knowledge and learning programming concepts.",
        technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
        title: "Task Manager",
        description:
            "A simple application for organizing daily tasks and improving productivity.",
        technologies: ["JavaScript", "Node.js"],
    },
];

export default function ProjectList() {
    return (
        <section aria-labelledby="projects-heading" className="mt-12">
            <h2
                id="projects-heading"
                className="mb-6 text-2xl font-bold"
            >
                My Projects
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </section>
    );
}
