import React from 'react';
import './card.css';

export default function Card(props) {
  return (
    <div className="card">
      {
        <div className="card__img">
          <img
            className="card__img-background"
            src={
              props.news.imagens !== ''
                ? 'https://agenciadenoticias.ibge.gov.br/' +
                  JSON.parse(props.news.imagens).image_intro
                : ''
            }
            alt={`imagem demonstrativa da noticia ${props.news.title}`}
          />
        </div>
      }
      <div className="card__content">
        <p className="card__content-title">
          {props.news.titulo === null
            ? '(Reportagem sem titulo)'
            : props.news.titulo}
        </p>
        <a
          href={props.news.link}
          target="_blank"
          className="card__content-link"
        >
          {props.news.link}
        </a>

        <p className="card__content-edit">
          {props.news.author === null
            ? '(Reportagem sem editorias)'
            : `Editorias: ${props.news.editorias}`}
        </p>
      </div>
    </div>
  );
}
