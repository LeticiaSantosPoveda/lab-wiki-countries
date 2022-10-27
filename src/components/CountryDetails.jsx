import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

function CountryDetails({countries}){

  const {id} = useParams();

  const country = countries.find(country => country.alpha3Code === id)

  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
      />
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((country) => {
                  return (
                    <ul>
                      <Link to={'/' + country}>
                        <li>{country}</li>
                      </Link>
                    </ul>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;