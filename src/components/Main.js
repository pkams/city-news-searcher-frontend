import React from 'react';
import Preloader from './Preloader';

const { v4: uuid } = require('uuid');

export default function Main(props) {
  function handleSelectUf(evt) {
    const uf = evt.target.value;
    props.setSelectedUf(uf);
  }

  function handleSelectCity(evt) {
    const city = evt.target.value;
    props.setSelectedCity(city);
  }

  function handleSelectDate(evt) {
    const date = evt.target.value;
    props.setSelectedDate(date);
  }

  function activateSearch() {
    props.setsearchTrigger(!props.searchTrigger);
  }

  return (
    <>
      <h2>
        Selecione o estado e cidade para encontrar noticias para a data
        escolhida!
      </h2>
      <div className="forms">
        <select name="uf" id="uf" onChange={handleSelectUf}>
          <option value="0" key="select_uf">
            Selecione uma UF
          </option>
          {props.ufs.map((uf) => (
            <option value={uf.sigla} key={uf.sigla}>
              {uf.nome}
            </option>
          ))}
        </select>

        <select
          name="city"
          id="city"
          value={props.selectedCity}
          onChange={handleSelectCity}
        >
          <option value="0" key="select_city">
            Selecione uma cidade
          </option>
          {props.cities.map((city) => (
            <option value={city.nome} key={city.id}>
              {city.nome}
            </option>
          ))}
        </select>

        <label>Data de inicio:</label>
        <input type="date" onChange={handleSelectDate} />

        <button onClick={activateSearch}>Pesquisar</button>
      </div>

      <div className="main-content">
        {props.searching ? (
          <Preloader />
        ) : props.selectedNews.length === 0 ? (
          'Nenhuma noticia encontrada.'
        ) : (
          props.selectedNews.map((news) => <p key={uuid()}>{news.title}</p>)
        )}
      </div>
    </>
  );
}
