import Head from 'next/head'

export default function Footer({title, desc}) {
    return (
        <Head>
            <title>{title} - Oskari Järvelin</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="description" content={desc}/>
        </Head>
    );
}