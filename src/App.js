import logo from './logo.svg';
import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
require('dotenv').config();
const { v4: uuid } = require('uuid');

function App() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedNews, setSelectedNews] = useState(['']);
  const [searchTrigger, setsearchTrigger] = useState(false);

  function convert_date(s, fmt) {
    let s_splitted = s.split('-');
    if (fmt === 'US') {
      s = `${s_splitted[1]}/${s_splitted[2]}/${s_splitted[0]}`;
    } else {
      s = `${s_splitted[2]}/${s_splitted[1]}/${s_splitted[0]}`;
    }
    return s;
  }

  function validate_date(s) {
    s = convert_date(s, 'US');
    if (!/^\d\d\/\d\d\/\d\d\d\d$/.test(s)) {
      return false;
    }
    const parts = s.split('/').map((p) => parseInt(p, 10));
    const d = new Date(parts[2], parts[0], parts[1]);
    console.log(d);
    return (
      d.getMonth() === parts[0] &&
      d.getDate() === parts[1] &&
      d.getFullYear() === parts[2]
    );
  }

  function activateSearch() {
    setsearchTrigger(!searchTrigger);
  }

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        //console.log(response);
        setCities(response);
      });
  });

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        //console.log(response);
        setUfs(response);
      });
  }, [selectedUf]);

  useEffect(() => {
    console.log(
      !validate_date(selectedDate) && selectedCity !== '0' && selectedUf !== '0'
    );
    if (
      !validate_date(selectedDate) |
      (selectedCity === '0') |
      (selectedUf === '0')
    ) {
      return;
    }

    console.log(
      //`https://apinoticias.tedk.com.br/api/?q=${
      //  selectedCity.split(' ').join('').trim() + selectedUf.trim()
      //}&date=${convert_date(
      //  selectedDate
      //)}`
      `https://newsapi.org/v2/everything?q=${selectedCity
        .split(' ')
        .join('%20')
        .trim() +
        '%20' +
        selectedUf.trim()}&apiKey=${
        process.env.API_KEY
      }&from=${selectedDate}&sortBy=popularity`
    );
    fetch(
      `https://newsapi.org/v2/everything?q=${selectedCity
        .split(' ')
        .join('%20')
        .trim() +
        '%20' +
        selectedUf.trim()}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        setSelectedNews(response.articles);
      });
  }, [searchTrigger]);

  function handleSelectUf(evt) {
    const uf = evt.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(evt) {
    const city = evt.target.value;
    setSelectedCity(city);
  }

  function handleSelectDate(evt) {
    const date = evt.target.value;
    setSelectedDate(date);
  }

  return (
    <div className="App">
      {/*<Header></Header>*/}
      <h1>
        Selecione o estado e cidade para encontrar noticias para a data
        escolhida!
      </h1>
      <div className="forms">
        <select name="uf" id="uf" onChange={handleSelectUf}>
          <option value="0" key="select_uf">
            Selecione uma UF
          </option>
          {ufs.map((uf) => (
            <option value={uf.sigla} key={uf.sigla}>
              {uf.nome}
            </option>
          ))}
        </select>

        <select
          name="city"
          id="city"
          value={selectedCity}
          onChange={handleSelectCity}
        >
          <option value="0" key="select_city">
            Selecione uma cidade
          </option>
          {cities.map((city) => (
            <option value={city.nome} key={city.id}>
              {city.nome}
            </option>
          ))}
        </select>

        <input type="date" onChange={handleSelectDate} />

        <button onClick={activateSearch}>Procurar</button>
      </div>

      <div className="main-content">
        {selectedNews.length === 0
          ? 'Nenhuma noticia encontrada.'
          : selectedNews.map((news) => <p key={uuid()}>{news.title}</p>)}
      </div>
    </div>
  );
}

export default App;
