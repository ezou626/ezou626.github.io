/*
Profile redirects for website
*/
import Image from 'next/image';
import githubIcon from '../public/github-icon.svg';
import gmailIcon from '../public/gmail-icon.svg';
import linkedinIcon from '../public/linkedin-icon.svg';

export default function Profiles() {
    return (
        <footer className='px-7 py-5 text-center animate-revealprofiles'>
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
        </footer>
    )
}