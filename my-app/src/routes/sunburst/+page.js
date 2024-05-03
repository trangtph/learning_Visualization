import Papa from 'papaparse'

export const load = async ({ fetch }) => {

    const data2 =  await d3.csv('https://raw.githubusercontent.com/trangtph/Programming/main/Processed_data/nation_customer_revenue.csv');
    
    console.log(data2)


    return {
      suns: data2
    }
}