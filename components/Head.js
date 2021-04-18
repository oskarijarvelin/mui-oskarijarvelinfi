import Head from 'next/head'

export default function Footer({title}) {
    return (
        <Head>
            <title>{title} - Oskari Järvelin</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
    );
}