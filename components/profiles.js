/*
Navigation bar for website
*/
import Image from 'next/image';
import githubIcon from '../public/github-icon.svg';
import gmailIcon from '../public/gmail-icon.svg';
import linkedinIcon from '../public/linkedin-icon.svg';

const resumelink = 'https://docs.google.com/document/d/1EsoE86d8c6xYKbqX7LTHxdlieA_lAbjB53HeLBha318/edit?usp=sharing'

export default function Profiles() {
    return (
        <div className='container px-7 py-5 text-center animate-revealprofiles'>
            <ul className='space-x-14 inline-flex'>
                <li>
                    <a href = "mailto:ezou626@seas.upenn.edu">
                        <Image src={gmailIcon} className='w-8' alt='Gmail'></Image>
                    </a>
                </li>
                <li>
                    <a href = "https://github.com/ezou626">
                        <Image src={githubIcon} className='w-8' alt='Github'></Image>
                    </a>
                </li>
                <li>
                    <a href = "https://www.linkedin.com/in/eric-zou-4512a7219">
                        <Image src={linkedinIcon} className='w-8' alt='Linkedin'></Image>
                    </a>
                </li>
            </ul>
        </div>
    )
}