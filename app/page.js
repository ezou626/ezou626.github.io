import NavigationBar from '../components/navigationBar';
import Profiles from '../components/profiles';

export default function HomePage() {

return (
  <>
    <NavigationBar></NavigationBar>
    <main className='h-full px-10 overflow-y-clip space-y-5 py-32 animate-revealbody mx-auto max-w-5xl'>
        <h1 className="text-6xl font-bold">Eric Zou</h1>
        <h2 className="text-4xl">Computer Science BSE Student, University of Pennsylvania</h2>
    </main>
    <Profiles></Profiles>
  </>
)}
