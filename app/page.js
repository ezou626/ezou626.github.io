import NavigationBar from '../components/navigationBar';
import Profiles from '../components/profiles';
 
export const metadata = {
  title: 'Eric Zou',
}

const resumelink = 'https://docs.google.com/document/d/1EsoE86d8c6xYKbqX7LTHxdlieA_lAbjB53HeLBha318/edit?usp=sharing'

export default function HomePage() {

return (
  <>
    <NavigationBar></NavigationBar>
    <main className='min-h-fit px-10 overflow-y-clip'>
      <div className='container space-y-2 py-32 animate-revealbody'>
        <h1 className="text-6xl font-bold">Eric Zou</h1>
        <h2 className="text-4xl">Computer Engineering, University of Pennsylvania</h2>
        <h3 className="text-2xl">Welcome to my website!</h3>
      </div>
    </main>
    <Profiles></Profiles>
  </>
)}