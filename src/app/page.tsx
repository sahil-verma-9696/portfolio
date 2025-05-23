import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import { getRepos } from "@/data/github/repo";
import { Mail, Github, Linkedin, Code } from "lucide-react";

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
      <section id="about" className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I'm a <span className="font-semibold">Full Stack Web Developer</span> passionate about building modern, scalable web applications. I specialize in React, Node.js, and Tailwind CSS, and have strong experience with MongoDB, Firebase, and Express.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-800 dark:text-gray-200">
          {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS', 'JavaScript'].map((tech) => (
            <div key={tech} className="bg-gray-100 dark:bg-[#181818] p-4 rounded-lg shadow">
              <Code className="mx-auto mb-2" />
              {tech}
            </div>
          ))}
        </div>
      </section>

       {/* Projects Section */}
       <section id="projects" className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
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
                <span className="font-medium">Language:</span> {repo.language || "N/A"}
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
      <section id="contact" className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Feel free to reach out to me via email or connect with me on social platforms.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:sahils.verma.1000@gmail.com" className="text-gray-700 dark:text-gray-300 hover:underline">
            <Mail className="inline-block mr-2" /> sahils.verma.1000@gmail.com
          </a>
          <a href="https://github.com/sahil-verma-9696" target="_blank" className="text-gray-700 dark:text-gray-300 hover:underline">
            <Github className="inline-block mr-2" /> GitHub
          </a>
          <a href="https://linkedin.com/in/sahil-verma-9696" target="_blank" className="text-gray-700 dark:text-gray-300 hover:underline">
            <Linkedin className="inline-block mr-2" /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
