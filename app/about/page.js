import NavigationBar from '../../components/navigationBar';
import Profiles from '../../components/profiles';

export const metadata = {
    title: 'About',
}

export default function AboutPage() {

return (
  <div>
    <NavigationBar></NavigationBar>
    <main className='min-h-fit px-10 overflow-y-clip container space-y-2 py-16 animate-revealbody'>
      <h1 className="text-6xl font-bold">About</h1>
      <p>
        Hi! I'm Eric. I'm a sophomore pursuing a BSE in Computer Engineering (and hopefully an Accelerated Master's in Computer Science) at the University of Pennsylvania, with the intent to graduate in 2026. I'm interested in software development, AI/ML, and embedded systems as a means to bring cool tech to the general public.
      </p>
      <p>
        Right now, I am a student researcher at the Center for Neuroengineering and Therapeutics, using Python, MATLAB, and data analysis packages to analyze fMRI scans for epilepsy diagnosis and treatment. On campus, I'm a member of the Tikkun Olam Makers UPenn chapter, where I write Arduino programs and design circuits to create devices for people in need. I've also participated in hackathons to gain experience with web development, building applications that utilize powerful APIs in innovative ways.
      </p>
      <p>
        I'm currently searching for a summer 2024 tech-oriented internship to gain industry experience in one of my interests. If you have an open role and think I'd be a great fit, please send me an email to let me know!
      </p> 
    </main>
    <Profiles></Profiles>
  </div>
)}