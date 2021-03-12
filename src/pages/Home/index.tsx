import { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { CardCountry } from '../../components/CardCountry';

import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import api from '../../services/api';

import { Container, Filters, CardGrid } from './styles';

interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
}

export function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllCountries() {
      setLoading(true);

      const response = await api.get('/all');

      setCountries(response.data);
      setLoading(false);
    }

    getAllCountries();
  }, [])

  return (
    <main>
      <Header />
      <Container>
        <Filters>
          <form>
            <FiSearch size={24} />
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </form>

          <select name="">
            <option value="">Africa</option>
            <option value="">America</option>
            <option value="">Asia</option>
            <option value="">Europe</option>
            <option value="">Oceania</option>
          </select>
        </Filters>

        {loading && <Loader />}
        {countries.length > 0 && (
          <CardGrid>
            {countries.map((country, index) => (
              <CardCountry key={index} data={country} />
            ))}
          </CardGrid>
        )}
      </Container>
    </main>
  )
}
