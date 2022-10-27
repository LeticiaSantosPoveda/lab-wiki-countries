import {Link} from 'react-router-dom';

function CountriesList({countries}){

    return(
    
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                {countries.map(country =>{
                    return(
                        <div>
                        <Link className="list-group-item list-group-item-action" to={"/"+country.alpha3Code}> 
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag"/>

                        <h3>{country.name.official}</h3></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CountriesList;
