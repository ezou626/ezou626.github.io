import Link from 'next/link';
 
export const metadata = {
  title: 'Eric Zou',
}

export default function HomePage() {

return (
  <div>
    <Link href = "about">About</Link>
    <h1>Eric W Zou</h1>
    <h2>Computer Engineering, University of Pennsylvania</h2>
    <h3>This website is under construction! Thanks for your patience.</h3>
  </div>
)}