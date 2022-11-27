import React from 'react';
import './about.css';

export default function About() {
  return (
    <section className="about">
      <h3>PT-BR</h3>
      <p className="about__text">
        O aplicativo "News Searcher Web App" foi implementado como projeto de
        finalização do curso de Desenvolvedor Web da Practicum by Yandex. O
        objetivo proposto foi criar um projeto frontend que interagisse com APIs
        publicas utilizando o framework React e linguagem Javascript. As APIs
        escolhidas para esta tarefa foram as APIs do IBGE para captura de dados
        dos estados e municipios brasileiros e, a partir destes, a possibilidade
        de pesquisar noticias relacionadas a determinada localidade baseando-se
        na API de noticias do próprio IBGE. Devido ao carater de "prova de
        conceito" do projeto, as noticias foram limitadas aquelas
        disponibilizadas pela API do IBGE, entretanto o projeto pode ser
        escalado para outras APIs de noticias utilizando os mesmos conceitos.
      </p>

      <h3>ENG</h3>
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
