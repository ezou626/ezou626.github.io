import Link from 'next/link';

import NavigationBar from '../components/navigationBar';
 
export const metadata = {
  title: 'Eric Zou',
}

const resumelink = 'https://docs.google.com/document/d/1EsoE86d8c6xYKbqX7LTHxdlieA_lAbjB53HeLBha318/edit?usp=sharing'

export default function HomePage() {

return (
  <div>
    <NavigationBar></NavigationBar>
    <h1>Eric W Zou</h1>
    <h2>Computer Engineering, University of Pennsylvania</h2>
    <p>Welcome to my website!</p>
    
  </div>
)}