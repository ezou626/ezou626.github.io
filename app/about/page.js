import Link from "next/link";

export const metadata = {
  title: "About",
};

const ABOUT = [
  `Hi! I'm Eric. I'm a senior pursuing a MS/BSE in Computer Science at UPenn, graduating
    May 2026. I'm interested in using SWE and AI/ML to bring cool tech to the public.`,

  `So far, I've dabbled in research at the Center for Neuroengineering and Therapeutics at UPenn,
    digitization and databases at Kyowa Kirin, and site reliability engineering at a variety of organizations.
    I'm comfortable with data engineering tasks using Python, analysis libraries like numpy and pandas, SQL,
    web development with modern frameworks like React, Next.js, and FastAPI.`,

  `Recently, I've become more interested in distributed systems and low-level programming, particularly in C and C++.`,
];

export default function AboutPage() {
  return (
    <main className="h-full px-10 overflow-y-clip space-y-5 animate-revealbody max-w-5xl lg:max-w-7xl items-center">
      <h1 className="text-4xl font-bold">About</h1>
      {ABOUT.map((paragraph, index) => (
        <p key={index} className="text-lg lg:text-xl leading-snug">
          {paragraph}
        </p>
      ))}
      <p className="text-lg lg:text-xl leading-snug pb-8">
        If you're interested in seeing some examples of my work, please check
        out{" "}
        <Link href="/projects" className="underline">
          my projects
        </Link>
        .
      </p>
    </main>
  );
}
