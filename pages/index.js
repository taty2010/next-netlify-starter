import React, { useState } from 'react';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Collections from '@components/Collections';

import styles from './FeedbackForm.module.css'


export default function Home({products}) {

  return (
    <Layout>
          <Header title="Shop our Tye-dye Collection" />
          <div className="products-wrapper">
            {products.map((p) => (
              <div key={p.id} className="product">
                <a href={`/products/${p.id}`}>
                  <img className="product-img" onMouseOver={(x) => x.target.src = p.images[1].src} onMouseOut={(x) => x.target.src = p.images[0].src} src={p.images[0].src}></img>
                  <p >{p.title}</p>
                  <ul className="size-list">
                    {p.options[0].values.map(sizes => (
                        <li key={sizes}>{sizes}</li>
                    ))}
                  </ul>
                </a>
                <button className="quickView">Quick View</button>
              </div>
            ))}
          </div>
          <Collections collection1="Clothing" collection2="Accesories"/>
          <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">Name</label>
        <input id="name" className={styles['form-field']} type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input id="email" className={styles['form-field']} type="email" name="email" required />

        <label htmlFor="feedback">What is your feedback?</label>
        <textarea id="feedback" className={styles['form-field']} wrap="soft" name="feedback" required></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </Layout>
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
