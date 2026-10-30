
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    link,
}: ProjectCardProps) {
    return (
        <article className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="mt-2 text-gray-700">
                {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded bg-blue-100 px-3 py-1 text-sm text-blue-800"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-700 underline"
                >
                    View Project
                </a>
            )}
        </article>
    );
}
