import React from 'react';
import './card.css';

export default function Card(props) {
  return (
    <div className="card">
      <p>{props.news.url}</p>
      <p>{props.news.title}</p>
    </div>
  );
}
