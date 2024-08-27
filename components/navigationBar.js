/*
Navigation bar for website
*/
import UnderlineLink from './underlineLink';

const resumelink = 'https://drive.google.com/file/d/1LGG-uQAHkdTudSQczu1RUTNUTtkm9aKM/view?usp=sharing'

export default function NavigationBar() {
    return (
        <nav className='px-10 py-7 animate-revealnav'>
            <ul className='float-right space-x-10 flex'>
                <li><UnderlineLink href = '/'>Home</UnderlineLink></li>
                <li><UnderlineLink href = 'about'>About</UnderlineLink></li>
                <li><UnderlineLink href = {resumelink}>Resumé</UnderlineLink></li>
            </ul>
        </nav>
    )
}
