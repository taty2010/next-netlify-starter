import fetch from 'node-fetch';

export const handler = async (event) => {

    const product = `/7843493445852`
    const url = `https://${process.env.SHOPIFY_STORE_ID}.com/admin/api/2022-07/products${product}.json`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_TOKEN
        }
    })
    .then((res) => res.json())
    .catch((err) => console.error(err))

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}