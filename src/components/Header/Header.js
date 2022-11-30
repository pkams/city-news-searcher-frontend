import React from 'react';
import './header.css';
import news_img from '../../images/news.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="header__img" src={news_img} />
      <h1 className="header__title">News Searcher Web App</h1>
    </header>
  );
}
