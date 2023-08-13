import Link from 'next/link';

export default function UnderlineLink(props) {
    
    return (
        <Link className="relative group" href={props.href}>
            <span className='text-xl'>{props.children}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
        </Link>
    )
}