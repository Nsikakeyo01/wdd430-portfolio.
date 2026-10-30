
interface SkillCardProps {
    name: string;
    description: string;
}

export default function SkillCard({
    name,
    description,
}: SkillCardProps) {
    return (
        <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">
                {name}
            </h3>

            <p className="mt-2 text-gray-700">
                {description}
            </p>
        </article>
    );
}
