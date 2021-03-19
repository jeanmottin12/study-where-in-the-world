import { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { FiSearch, FiXCircle } from "react-icons/fi";
import { ThemeContext } from '../../context/ThemeContext';

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

const regionOptions = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
]

export function Home() {
  const { themeDark } = useContext(ThemeContext);

  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  async function getAllCountries() {
    setLoading(true);

    const response = await api.get('/all');
    setCountries(response.data);

    setLoading(false);
  }

  useEffect(() => {
    getAllCountries();
  }, []);

  function resetCountries() {
    getAllCountries();
    setSearchValue('');
    setNotFound(false);
  }

  async function handleRegion(value: any) {
    setLoading(true);

    const response = await api.get(`/region/${value.value}`);
    setCountries(response.data);

    setLoading(false);
  }

  return (
    <main>
      <Header />
      <Container theme={themeDark}>
        <div>

          <Filters theme={themeDark}>
            <form onSubmit={async (e: React.SyntheticEvent) => {
                e.preventDefault();

                try {
                  setLoading(true);
                  const responseSearch = await api.get(`/name/${searchValue}`);
                  setCountries(responseSearch.data);
                  setNotFound(false);
                  setLoading(false);
                } catch (err) {
                  setNotFound(true);
                  setLoading(false);
                }
              }}
            >
              <FiSearch size={24} />
              <input
                type="text"
                placeholder="Search for a country..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              {searchValue.length > 0 && (
                <button type="button" onClick={resetCountries}>
                  <FiXCircle size={24} />
                </button>
              )}
            </form>

            <Select
              placeholder="Filter by Region"
              options={regionOptions}
              onChange={(value) => handleRegion(value)}
              className="react-select"
            />
          </Filters>

          {loading && <Loader />}
          {!notFound ? countries.length > 0 && (
            <CardGrid>
              {countries.map((country, index) => (
                <CardCountry key={index} data={country} />
              ))}
            </CardGrid>
          ) : (
            <div className="not-found">
              <h3>Not found</h3>
            </div>
          )}
        </div>
      </Container>
    </main>
  )
}
