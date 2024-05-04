export const load = async ({ fetch }) => { 
    const hot_products = await fetch('https://raw.githubusercontent.com/trangtph/Programming/main/Processed_data/hot_product_all_hiera.json')
    const data_hot_products = await hot_products.json()
  
    return {
      top_products: hot_products
    }
  }