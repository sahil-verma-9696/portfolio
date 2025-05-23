import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import { getRepos } from "@/data/github/repo";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

export default async function Home() {
  const data = await getRepos("sahil-verma-9696");

  if ("message" in data) {
    return <div>Error: {data.message}</div>;
  }

  return (
    <div className="bg-white dark:bg-[#0a0a0a] w-[90%] max-w-7xl m-auto pt-4 px-4">
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I&apos;m a passionate{" "}
          <span className="font-semibold">Full Stack Developer</span> with
          experience in building scalable web applications using the MERN stack.
          I love solving problems, contributing to open-source projects, and
          learning new technologies.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-6 text-4xl text-gray-800 dark:text-white">
          <SiJavascript title="JavaScript" />
          <SiReact title="React.js" />
          <SiNodedotjs title="Node.js" />
          <SiMongodb title="MongoDB" />
          <SiTailwindcss title="Tailwind CSS" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((repo) => (
            <div
              key={repo.id}
              className="group bg-gray-100 dark:bg-[#181818] hover:bg-gray-200 dark:hover:bg-[#242424] p-6 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">
                {repo.full_name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
                {repo.description || "No description provided."}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                <span className="font-medium">Language:</span>{" "}
                {repo.language || "N/A"}
              </p>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-gray-300 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-20 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Contact
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Feel free to connect with me:
        </p>
        <div className="flex gap-6 text-2xl text-gray-800 dark:text-white">
          <a
            href="mailto:sahils.verma.1000@gmail.com"
            title="Email"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/sahil-verma-9696"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-verma-9696"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 dark:hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
}
