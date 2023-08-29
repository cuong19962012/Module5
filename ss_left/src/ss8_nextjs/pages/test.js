import axios from "axios";


export default function test({ result }) {
    return (
        <>
            <h1>VietNam's COVID-19 Information</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            State
                        </th>
                        <th>
                            Actice
                        </th>
                        <th>
                            Recovered
                        </th>
                        <th>
                            Death
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {result.map(info => (
                        <tr key={info.id}>
                            <td>{info.date}</td>
                            <td>{info.states}</td>
                            <td>{info.positive}</td>
                            <td>{info.recovered}</td>
                            <td>{info.death}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export async function getStaticProps() {
    const result = (await axios.get('https://api.covidtracking.com/v1/us/daily.json')).data;
    return {
        props: { result }
    }
}