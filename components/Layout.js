import Head from 'next/head'
import Nav from './Nav'
import Footer from '@components/Footer'
export default function Layout({children}){
    return(
        <>
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav title="Netli-Shop"/>
            <main className="container">{children}</main>
            <Footer/>
        </>
    )
}