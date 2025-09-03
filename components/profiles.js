/*
Profile redirects for website
*/
import Image from "next/image";
import GithubIcon from "../public/github-icon.svg";
import GmailIcon from "../public/gmail-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";

const PROFILE_CONFIG = [
  {
    name: "Gmail",
    url: "mailto:ezou626@seas.upenn.edu",
    icon: GmailIcon,
  },
  {
    name: "Github",
    url: "https://github.com/ezou626",
    icon: GithubIcon,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/eric-zou-4512a7219",
    icon: LinkedinIcon,
  },
];

export default function Profiles() {
  return (
    <footer className="px-7 py-5 text-center animate-revealprofiles">
      <ul className="space-x-14 inline-flex">
        {PROFILE_CONFIG.map((profile) => (
          <li key={profile.name}>
            <a href={profile.url}>
              <Image
                src={profile.icon}
                className="w-8"
                alt={profile.name}
              ></Image>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
