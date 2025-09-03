/*
Navigation bar for website
*/
import UnderlineLink from "./underlineLink";

const resumelink =
  "https://drive.google.com/file/d/1aTGn0ECjPcYAcR6y2Y736v4gRcoy6HJq/view?usp=sharing";

export default function NavigationBar() {
  return (
    <nav className="px-4 py-8 animate-revealnav lg:py-12 lg:px-16">
      <ul className="float-right space-x-10 flex text-lg lg:text-xl lg:space-x-14">
        <li>
          <UnderlineLink href="/">Home</UnderlineLink>
        </li>
        <li>
          <UnderlineLink href="about">About</UnderlineLink>
        </li>
        <li>
          <UnderlineLink href="projects">Projects</UnderlineLink>
        </li>
        <li>
          <UnderlineLink href={resumelink}>Resumé</UnderlineLink>
        </li>
      </ul>
    </nav>
  );
}
