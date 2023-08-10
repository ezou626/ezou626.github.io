/*
Navigation bar for website
*/
import Link from 'next/link';

const resumelink = 'https://docs.google.com/document/d/1EsoE86d8c6xYKbqX7LTHxdlieA_lAbjB53HeLBha318/edit?usp=sharing'

export default function NavigationBar() {
    return (
        <span>
        <Link href = "/" className="float-left p-5">Home</Link>
        <Link href = "about">About</Link>
        <Link href={resumelink}>Resume</Link>
        </span>
    )
}