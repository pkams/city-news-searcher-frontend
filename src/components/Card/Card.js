import React from 'react';
import './card.css';

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card__img"
        src={props.news.urlToImage}
        alt={`imagem demonstrativa da noticia ${props.news.title}`}
      />
      <div className="card__content">
        <p>
          {props.news.title === null
            ? '(Reportagem sem titulo)'
            : props.news.title}
        </p>
        <a href={props.news.url}>{props.news.url}</a>

        <p>
          {props.news.author === null
            ? '(Reportagem sem fonte)'
            : `Fonte: ${props.news.author}`}
        </p>
      </div>
    </div>
  );
}
