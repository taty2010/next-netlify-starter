import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home({products}) {

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my shop!" />
        <div className="products-wrapper">
          {products.map((p) => (
            <div key={p.id} className="product">
              <img src={p.image.src}></img>
              <p >{p.title}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch(process.env.NETLIFY == "true" ? `${process.env.URL}/shopify-geo` : 'http://localhost:8888/shopify-geo')
  const products = await res.json()
  return{
    props:{
      products,
    },
    revalidate: 10,
  }
}
