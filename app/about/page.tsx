
import Link from "next/link";
import SkillCard from "../../components/SkillCard";

export default function About() {
    return (
        <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold">About Me</h1>

                <p className="mt-6 leading-relaxed">
                    My name is Nsikak Eyo. I am a software development
                    student at BYU-Idaho with a background in electrical
                    engineering. I enjoy learning new technologies and
                    building useful web applications.
                </p>

                <h2 className="mt-10 text-2xl font-bold">
                    My Technical Skills
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <SkillCard
                        name="HTML and CSS"
                        description="Building structured and responsive web pages."
                    />

                    <SkillCard
                        name="JavaScript"
                        description="Creating interactive websites and applications."
                    />

                    <SkillCard
                        name="React and Next.js"
                        description="Learning to build modern full-stack web applications."
                    />

                    <SkillCard
                        name="Git and GitHub"
                        description="Managing code and tracking project changes."
                    />
                </div>

                <h2 className="mt-10 text-2xl font-bold">
                    My Career Goal
                </h2>

                <p className="mt-4 leading-relaxed">
                    My goal is to become a skilled software developer
                    who creates practical digital solutions that make
                    everyday tasks easier.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-block rounded bg-blue-900 px-5 py-3 text-white hover:bg-blue-800"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
