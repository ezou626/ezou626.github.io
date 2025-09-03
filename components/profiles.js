/*
Profile redirects for website
*/
import Image from "next/image";
import GithubIcon from "../public/github-icon.svg";
import GmailIcon from "../public/gmail-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";

export default function Profiles() {
  return (
    <footer className="px-7 py-5 text-center animate-revealprofiles">
      <ul className="space-x-14 inline-flex">
        <li>
          <a href="mailto:ezou626@seas.upenn.edu">
            <Image src={GmailIcon} className="w-8" alt="Gmail"></Image>
          </a>
        </li>
        <li>
          <a href="https://github.com/ezou626">
            <Image src={GithubIcon} className="w-8" alt="Github"></Image>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eric-zou-4512a7219">
            <Image src={LinkedinIcon} className="w-8" alt="Linkedin"></Image>
          </a>
        </li>
      </ul>
    </footer>
  );
}
