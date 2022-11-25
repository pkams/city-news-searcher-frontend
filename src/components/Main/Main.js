import React from 'react';
import Preloader from '../Preloader/Preloader';
import Card from '../Card/Card';
import './main.css';

const { v4: uuid } = require('uuid');

export default function Main(props) {
  function handleSelectUf(evt) {
    console.log(evt.target.value);
    const uf = evt.target.value;
    props.setSelectedUf(uf);
    console.log(props.selectedUf);
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
    <div className="main">
      <h2>
        Selecione o estado, cidade e data de inicio para encontrar noticias
        relacionadas!
      </h2>
      <div className="main__forms">
        <div className="main__forms-item">
          <label>UF:</label>
          <select
            name="uf"
            id="uf"
            onChange={handleSelectUf}
            className="main__forms-item-input"
          >
            <option value="0" key="select_uf">
              Selecione uma UF
            </option>
            {props.ufs.map((uf) => (
              <option value={uf.sigla} key={uf.sigla}>
                {uf.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="main__forms-item">
          <label>Cidade:</label>
          <select
            name="city"
            id="city"
            value={props.selectedCity}
            onChange={handleSelectCity}
            className="main__forms-item-input"
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
        </div>

        <div className="main__forms-item">
          <label>Data de inicio:</label>
          <input
            type="date"
            onChange={handleSelectDate}
            className="main__forms-item-input"
          />
        </div>

        <button onClick={activateSearch} className="main__forms-item-button">
          Pesquisar
        </button>
      </div>

      <div className="main__content">
        {props.searching ? (
          <Preloader />
        ) : props.selectedNews.length === 0 ? (
          props.message
        ) : (
          props.selectedNews.map((news) =>
            news.length === 0 ? '' : <Card key={uuid()} news={news} />
          )
        )}
      </div>
    </div>
  );
}
