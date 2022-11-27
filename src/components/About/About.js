import React from 'react';
import './about.css';

export default function About() {
  return (
    <section className="about">
      <p className="about__text">
        The "News Searcher Web App" application was implemented as a final
        project for the Practicum by Yandex Web Developer course. The objective
        was to create a frontend project that interacts with public APIs using
        Javascript language and the React framework. The APIs chosen for that
        task were the IBGE APIs for retrive data from Brazilian states and
        cities and based on that searchs for news related to a given location
        based on a data using the IBGE's news API. Due to the "proof of concept"
        character of the project, the news were limited to those made available
        by the IBGE API, but the project can be scaled to other news APIs using
        the same concepts.
      </p>
    </section>
  );
}
