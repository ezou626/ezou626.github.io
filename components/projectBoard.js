/*
 * Project display board
 */

export default function ProjectBoard({ projects }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((project) => project.enable)
          .map((project, index) => (
            <div key={index} className="shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-500 mb-4">{project.desc}</p>
              <div className="flex space-x-4 justify-center mb-4">
                {Object.keys(project.links)
                  .filter((key) => project.links[key])
                  .map((key) => (
                    <a
                      key={key}
                      href={project.links[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </a>
                  ))}
              </div>
              <div>
                {(project.topics && project.topics.length > 0
                  ? project.topics
                  : project.tools
                ).map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
