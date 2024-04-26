import Papa from 'papaparse'

export const load = async ({ fetch }) => {

    const responseFlights = await fetch('https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.csv', {
      headers: {
        'Content-Type': 'text/csv'
    }})
    let csvFlights = await responseFlights.text()
    let parsedCsvFlights = Papa.parse(csvFlights, {header: true})

    console.log(parsedCsvFlights)
    return {
      flights: parsedCsvFlights.data
    }
}