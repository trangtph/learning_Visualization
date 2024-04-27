import Papa from 'papaparse'

export const load = async ({ fetch }) => {

    const nation = await fetch('https://raw.githubusercontent.com/trangtph/Programming/57d492490c8c4e1624ace7d9d1af87b5bd0b4326/Processed_data/nation_region_coordinate.csv', {
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
export const ssr = false;