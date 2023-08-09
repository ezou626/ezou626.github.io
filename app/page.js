import Link from 'next/link';
 
export const metadata = {
  title: 'Eric Zou',
}

const resumelink = 'https://docs.google.com/document/d/1EsoE86d8c6xYKbqX7LTHxdlieA_lAbjB53HeLBha318/edit?usp=sharing'

export default function HomePage() {

return (
  <div>
    <Link href = "about">About</Link>
    <Link href={resumelink}>Resume</Link>
    <h1>Eric W Zou</h1>
    <h2>Computer Engineering, University of Pennsylvania</h2>
    <h3>This website is under construction! Thanks for your patience.</h3>
  </div>
)}