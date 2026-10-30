
import ProjectList from "../components/ProjectList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">
          Nsikak Eyo
        </h1>

        <p className="mt-4 text-xl">
          Software Development Student | Web Developer
        </p>

        <p className="mt-6 leading-relaxed">
          Welcome to my portfolio! I am studying software
          development at BYU-Idaho. I enjoy building useful
          web applications and improving my programming skills.
        </p>

        <ProjectList />
      </div>
    </main>
  );
}
