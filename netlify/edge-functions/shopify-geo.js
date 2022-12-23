

export default async (request, context) => {
    const countryCode = context.geo?.country?.code || "US";
    const url = `https://${Deno.env.get('SHOPIFY_STORE_ID')}.com/admin/api/2022-07/products.json?product_type=${countryCode}`
    const response = await fetch(url, {
        headers: {
            "Accept": "application/json",
            "X-Shopify-Access-Token": Deno.env.get('SHOPIFY_ADMIN_API_TOKEN')
        }
    })
    const data = await response.json();
    return context.json(data['products'])

}