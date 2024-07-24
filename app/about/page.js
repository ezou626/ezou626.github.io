import NavigationBar from '../../components/navigationBar';
import Profiles from '../../components/profiles';

export const metadata = {
    title: 'About',
}

export default function AboutPage() {

return (
  <>
    <NavigationBar></NavigationBar>
    <main className='h-full px-10 overflow-y-clip space-y-5 py-16 animate-revealbody max-w-5xl mx-auto'>
      <h1 className="text-6xl font-bold">About</h1>
      <p className='text-xl'>
        Hi! I'm Eric. I'm a rising junior pursuing a BSE in Computer Science (and hopefully an Accelerated Master's in Computer Science) at the University of Pennsylvania, with the intent to graduate in 2026. I'm interested in software development, AI/ML, and embedded systems as a means to bring cool tech to the general public.
      </p>
      <p className='text-xl'>
        Right now, I am a student researcher at the Center for Neuroengineering and Therapeutics, using Python, MATLAB, and data analysis packages to analyze fMRI scans for epilepsy diagnosis and treatment. I've also participated in hackathons to gain experience with web development, building applications that utilize powerful APIs in innovative ways.
      </p>
      <p className='text-xl'>
        For summer 2024, I'll be working at Kyowa Kirin NA as an IT/Automation intern.
      </p> 
    </main>
    <Profiles></Profiles>
  </>
)}
