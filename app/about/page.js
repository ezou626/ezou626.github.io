import Link from 'next/link';

export const metadata = {
    title: 'About',
}

export default function AboutPage() {

return (
  <div>
    <Link href = "/">Home</Link>
    <h2>About</h2>
    <p>
      Hi! I'm Eric Zou. I'm pursuing a BSE in Computer Science (and hopefully an Accelerated Master's in Computer Science) at the University of Pennsylvania intending to graduate in 2026. I'm interested in software development, AI/ML, and embedded systems as a means to bring cool tech to the general public.
    </p>
    <p>
      In addition to my courses, I am a student researcher at the Center for Neuroengineering and Therapeutics, using Python and data analysis to analyze fMRI signals for epilepsy diagnosis and treatment. I've also participated in hackathons to gain experience with web development. On campus, I'm a member of the Tikkun Olam Makers chapter, where I write Arduino programs and design circuits to create devices for people in need.
    </p>
    <p>
      I'm currently searching for a summer 2024 technology-oriented internship to take a really deep dive in one of my interests. If you have an open role and think I'd be a great fit, please send me an email at <a href="ezou626@gmail.com">ezou626@gmail.com</a>
    </p> 
  </div>
)}