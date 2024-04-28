import Papa from 'papaparse'

export const load = async ({ fetch }) => {

    const nation = await fetch('https://raw.githubusercontent.com/trangtph/Programming/main/Processed_data/nation_customer_revenue.csv', {
      headers: {
        'Content-Type': 'text/csv'
    }})
    let csvNation = await nation.text()
    let parsedCsvNation = Papa.parse(csvNation, {header: true})

    console.log(parsedCsvNation)
    return {
      nations: parsedCsvNation.data
    }
}