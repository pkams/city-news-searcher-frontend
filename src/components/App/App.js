import { createRef, useEffect, useState } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import About from '../About/About';
require('dotenv').config();

function App() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedDate, setSelectedDate] = useState('dd/mm/aaaa');
  const [selectedNews, setSelectedNews] = useState(['']);
  const [searchTrigger, setsearchTrigger] = useState(false);
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState('Nenhuma noticia encontrada.');
  const [disableButton, setDisableButton] = useState(true);
  const ref = createRef();

  function validate_date(s) {
    s = convert_date(s, 'US');
    if (!/^\d\d\/\d\d\/\d\d\d\d$/.test(s)) {
      return false;
    }
    const parts = s.split('/').map((p) => parseInt(p, 10));
    const d = new Date(parts[2], parts[0], parts[1]);
    return (
      d.getMonth() === parts[0] &&
      d.getDate() === parts[1] &&
      d.getFullYear() === parts[2]
    );
  }

  function convert_date(s, fmt) {
    let s_splitted = s.split('-');
    if (fmt === 'US') {
      s = `${s_splitted[1]}/${s_splitted[2]}/${s_splitted[0]}`;
    } else {
      s = `${s_splitted[2]}/${s_splitted[1]}/${s_splitted[0]}`;
    }
    return s;
  }

  function sort_by_key(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        setUfs(sort_by_key(response, 'nome'));
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    setSelectedCity('0');
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
        setCities(sort_by_key(response, 'nome'));
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

    //let url_call = `https://newsapi.org/v2/everything?q=${
    // selectedCity.split(' ').join('%20').trim() + '%20' + selectedUf.trim()
    //}&apiKey=${
    //  process.env.REACT_APP_API_KEY
    //}&from=${selectedDate}&sortBy=popularity`;

    let url_call = `https://servicodados.ibge.gov.br/api/v3/noticias/?busca=${
      selectedCity.split(' ').join('%20').trim() + '%20' + selectedUf.trim()
    }&de=${selectedDate}`;

    //servicodados.ibge.gov.br/api/v3/noticias/?busca=manaus%20AM

    console.log(url_call);

    fetch(url_call)
      .then(setSearching(true))
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        console.log(response);
        if (response != null) {
          setMessage('Nenhuma noticia encontrada.');
          setSearching(false);
          setSelectedNews(response.items);
        } else {
          var d = new Date();
          d.setMonth(d.getMonth() - 1);
          setSearching(false);
          setSelectedNews([]);
          setMessage(
            `A API permite buscas até 30 dias anteriores a data atual, mude a data para no mínimo: ${d.toLocaleDateString()}.`
          );
        }
      });
  }, [searchTrigger]);

  useEffect(() => {
    const button = ref.current;
    if (button == null) {
      return;
    }
    if ((selectedCity != '0') & validate_date(selectedDate)) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [selectedCity, selectedDate, ref]);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/main"
          element={
            <Main
              setSelectedDate={setSelectedDate}
              setSelectedCity={setSelectedCity}
              setSelectedUf={setSelectedUf}
              setsearchTrigger={setsearchTrigger}
              searchTrigger={searchTrigger}
              ufs={ufs}
              selectedUf={selectedUf}
              selectedCity={selectedCity}
              selectedNews={selectedNews}
              selectedDate={selectedDate}
              cities={cities}
              searching={searching}
              message={message}
              refVar={ref}
              disableButton={disableButton}
              convert_date={convert_date}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
