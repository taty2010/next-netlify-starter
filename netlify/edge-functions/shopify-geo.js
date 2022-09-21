export default async (request, context) => {
    const countryCode = context.geo?.country?.code || "US";
    const url = `https://${Deno.env.get('SHOPIFY_STORE_ID')}.com/admin/api/2022-07/products.json?product_type=${countryCode}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": Deno.env.get('SHOPIFY_ADMIN_API_TOKEN')
        }
    })
    .then((res) => res.json())
    .catch((err) => console.error(err))

    return new Response(JSON.stringify(response['products']))
}