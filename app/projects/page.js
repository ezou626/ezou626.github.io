import ProjectBoard from "../../components/projectBoard";

export const metadata = {
  title: "Projects",
};

const PROJECTS = [
  {
    title: "Blip",
    tools: [
      "React",
      "Next.js",
      "Convex API",
      "LLlama-3.1b",
      "TypeScript",
      "TTS",
      "Dall-E",
    ],
    desc: "A platform to generate and listen to short-form audio content (PennApps XXV Best Entertainment Hack)",
    links: {
      website: "https://blipapp.vercel.app",
      github: "https://github.com/dzhan111/blipapp",
      demo: "https://devpost.com/software/blip-w5slqn",
    },
    enable: true,
  },
  {
    title: "YourKB",
    tools: ["React", "Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    desc: "Create and share a creative 1 KB image",
    links: {
      website: "https://yourkb.vercel.app",
      github: "https://github.com/ezou626/yourkb",
      demo: null,
    },
    enable: true,
  },
  {
    title: "DataLabeler",
    tools: ["React", "Vite", "Supabase", "Tailwind CSS", "Llama-3.1b"],
    desc: "Collect dense captions for image data via crowdsourcing",
    links: {
      website: null,
      github: "https://github.com/dzhan111/DataLabeler",
      demo: "https://www.youtube.com/watch?v=LLBAH43Sk9o",
    },
    enable: true,
  },
  {
    title: "TimeSink",
    tools: ["C", "C++", "Microcontroller", "HTTP"],
    desc: "3-in-1 soap dispenser, clock, and nightlight",
    links: {
      website: "https://ese3500.github.io/final-project-timesink",
      github: "https://github.com/ese3500/final-project-timesink",
      demo: "https://www.youtube.com/watch?v=FBzL9NcnUS8&feature=youtu.be",
    },
    enable: true,
  },
  {
    title: "Coffee Web Blocker",
    tools: [
      "React",
      "Web API",
      "Chrome API",
      "Tailwind CSS",
      "Daisy UI",
      "TypeScript",
      "Webpack",
    ],
    desc: "Block lists of websites for focus",
    links: {
      website:
        "https://chromewebstore.google.com/detail/coffee-web-blocker/enmnhnecpbfgpbloobjahifddldnoanh?hl=en-US",
      github: "https://github.com/ezou626/coffee-web-blocker",
      demo: null,
    },
    enable: true,
  },
  {
    title: "WalkWithMe",
    tools: [
      "React",
      "Google Maps API",
      "HTML",
      "CSS",
      "JavaScript",
      "Go",
      "Firebase",
      "Sonr",
    ],
    desc: "Find people to walk together with (PennApps XXIII Best Blockchain Entertainment Hack)",
    links: {
      website: null,
      github: "https://github.com/ezou626/coffee-web-blocker",
      demo: "https://devpost.com/software/walkwithme-sxw8uh",
    },
    enable: true,
  },
  {
    title: "DisCourse",
    tools: ["Node.js", "Discord API", "TypeScript"],
    desc: "Educational classroom management Discord bot",
    links: {
      website: null,
      github: "https://github.com/reantric/DisCourse",
      demo: "https://devpost.com/software/discourse-ni1oe9",
    },
    enable: true,
  },
];

async function getTopics(project) {
  const githubLink = project.links["github"];
  if (!githubLink) {
    return [];
  }

  // replace github.com with api.github.com/repos

  const repoPath = githubLink.replace("github.com/", "api.github.com/repos/");

  console.log(`${repoPath}/topics`);

  const response = await fetch(`${repoPath}/topics`, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch topics:", response.statusText);
    return [];
  }

  const data = await response.json();
  return data.names || [];
}

export default async function ProjectPage() {
  const projectsWithTopics = await Promise.all(
    PROJECTS.map(async (project) => {
      const topics = await getTopics(project);
      return { ...project, topics };
    })
  );

  return (
    <main className="h-full px-10 overflow-y-clip space-y-5 py-16 animate-revealbody max-w-5xl mx-auto">
      <ProjectBoard projects={projectsWithTopics} />
    </main>
  );
}
