import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Country {
  data: {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
    alpha3Code: string;
  }
}

export function CardCountry({ data }: Country) {
  return (
    <Container>
      <Link to={`/country/${data.alpha3Code}`}>
        <img src={data.flag} alt={data.name}/>
        <div>
          <h3>{data.name}</h3>
          <p><strong>Population:</strong> {data.population}</p>
          <p><strong>Region:</strong> {data.region}</p>
          <p><strong>Capital:</strong> {data.capital}</p>
        </div>
      </Link>
    </Container>
  )
}
