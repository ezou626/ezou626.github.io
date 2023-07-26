import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {

return (
    <>
    <Head>
        <title>Eric W Zou</title>
        <meta property="og:title" content="My page title" key="title" />
    </Head>
    <div>
        <Link href = "about">About</Link>
        <h1 font="Roboto">Eric W Zou</h1>
        <h2>Computer Engineering, University of Pennsylvania</h2>
        <h3>This website is under construction! Thanks for your patience.</h3>
    </div>
    </>
)}