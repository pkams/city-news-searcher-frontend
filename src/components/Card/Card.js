import React from 'react';
import './card.css';

export default function Card(props) {
  return (
    <div className="card">
      {
        <img
          className="card__img"
          src={
            'https://agenciadenoticias.ibge.gov.br/' +
            JSON.parse(props.news.imagens).image_intro
          }
          alt={`imagem demonstrativa da noticia ${props.news.title}`}
        />
      }
      <div className="card__content">
        <p>
          {props.news.titulo === null
            ? '(Reportagem sem titulo)'
            : props.news.titulo}
        </p>
        <a href={props.news.link} target="_blank">
          {props.news.link}
        </a>

        <p>
          {props.news.author === null
            ? '(Reportagem sem editorias)'
            : `Editorias: ${props.news.editorias}`}
        </p>
      </div>
    </div>
  );
}
