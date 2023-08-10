/*
Navigation bar for website
*/
import Link from 'next/link';

const resumelink = 'https://docs.google.com/document/d/1EsoE86d8c6xYKbqX7LTHxdlieA_lAbjB53HeLBha318/edit?usp=sharing'

export default function NavigationBar() {
    return (
        <nav className='container px-10 py-7'>
            <ul className='float-right space-x-10 flex'>
                <li><Link href = "/" className="">Home</Link></li>
                <li><Link href = "about" className="">About</Link></li>
                <li><Link href={resumelink} className="">Resume</Link></li>
            </ul>
        </nav>
    )
}