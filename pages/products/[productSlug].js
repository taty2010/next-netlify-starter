import Layout from '@components/Layout';
import { useState } from 'react';

export default function Product({product}){

  let color;
  let size;

  if(product.options){
    product.options.forEach(p => {
      if(p.name.toLowerCase() == 'color'){
        color = p.values
      }else if (p.name.toLowerCase() == 'size'){
        size = p.values
      }
    })
  }

  return(
    <Layout>
      <section className="product-main">
        <section>
          <img src={product.image.src}></img>
        </section>
        <section className="product-info">
          <h1 className="product-title">Product Title Here {product.title}</h1>
          <p dangerouslySetInnerHTML={{__html: product.body_html}}></p>
          Size:
          <ul className="size-list">
            {size.map(sizes => (
              <li key={sizes}>{sizes}</li>
            ))}
          </ul>
          Color:
          <ul className="color-list">
            {color.map(color => (
              <li style={{backgroundColor: color}} key={color}></li>
            ))}
          </ul>
          <button>Add to Cart</button>
        </section>
      </section>
    </Layout>
  )
}

export async function getStaticProps({params}){
  // console.log('ProductSlug',params.productSlug)
  const res = await fetch(`https://${process.env.SHOPIFY_STORE_ID}.com/admin/api/2022-07/products/${params.productSlug}.json`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_TOKEN
    }
  })
  const data = await res.json()
  const product = data.product
  return{
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch(process.env.NETLIFY == "true" ? `${process.env.URL}/shopify-geo` : process.env.CONTEXT == "deploy-preview" ? `${process.env.DEPLOY_PRIME_URL}/shopify-geo` : 'http://localhost:8888/shopify-geo')
  const data = await res.json()

  const paths = data.map( path => {
      return{
        params:{
          productSlug: `${path.id}`
        }
      }
  })
  // console.log('paths', paths)
    return{
      paths,
      fallback: false
    }
  }