import { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';

import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

interface ParamsProps {
  code: string;
}

interface CountryProps {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: [];
  currencies: [
    {
      code: string;
      name: string;
    }
  ];
  languages: [
    {
      iso639_1: string;
      name: string;
    }
  ];
  borders: [];
}

export function Country() {
  const { code } = useParams<ParamsProps>();
  const history = useHistory();

  const [country, setCountry] = useState<CountryProps>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCountryByCode() {
      setLoading(true);

      const response = await api.get(`/alpha/${code}`);

      setCountry(response.data);
      console.log(response.data);
      setLoading(false);
    }

    getCountryByCode();
  }, [code])

  function handleBack() {
    history.goBack();
  }

  return (
    <main>
      <Header />

      <Container>
        {loading ? (
          <Loader />
        ) : (
          <>
            <button type="button" onClick={handleBack}>
              <FiArrowLeft size={20} />
              Back
            </button>

            <div className="country-wrapper">
              <img src={country?.flag} alt={country?.name}/>
              <div>
                <h2>{country?.name}</h2>

                <ul>
                  <li><strong>Native Name:</strong> {country?.nativeName}</li>
                  <li><strong>Population:</strong> {country?.population}</li>
                  <li><strong>Region:</strong> {country?.region}</li>
                  <li><strong>Sub Region:</strong> {country?.subregion}</li>
                  <li><strong>Capital:</strong> {country?.capital}</li>
                  <li>
                    <strong>Top Level Domain: </strong>
                    {country?.topLevelDomain.join(', ')}
                  </li>
                  <li>
                    <strong>Currencies: </strong>
                    {country?.currencies.map(currency => <span key={currency.code}>{currency.name}</span>)}
                  </li>
                  <li>
                    <strong>Languages: </strong>
                    {country?.languages.map(language => language.name).join(', ')}
                  </li>
                </ul>

                <div className="border-countries">
                  <p>Border Countries: </p>
                  {country?.borders.map(border => (
                    <Link key={border} to={`/country/${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </main>
  )
}
