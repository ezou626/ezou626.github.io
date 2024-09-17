import NavigationBar from '../../components/navigationBar';
import Profiles from '../../components/profiles';
import aboutText from './aboutText';

export const metadata = {
    title: 'About',
}

export default function AboutPage() {

return (
  <>
    <NavigationBar></NavigationBar>
    <main className='h-full px-10 overflow-y-clip space-y-5 py-16 animate-revealbody max-w-5xl mx-auto'>
      <h1 className="text-6xl font-bold">{aboutText.heading}</h1>
      {aboutText.paragraphs.map((paragraph, index) => (
        <p key={index} className='text-xl'>
          {paragraph}
        </p>
      ))}
    </main>
    <Profiles></Profiles>
  </>
)}
