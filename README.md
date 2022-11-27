# Web Development - Practicum by Yandex - Final Project

Site de página única feito utilizando **HTML + CSS + Javascript + React** para conclusão do curso **Desenvolvedor Web da Practicum by Yandex**.

O aplicativo "News Searcher Web App" foi implementado como projeto de finalização do curso de Desenvolvedor Web da Practicum by Yandex. O objetivo proposto foi criar um projeto frontend que interagisse com APIs publicas utilizando o framework React e linguagem Javascript. As APIs escolhidas para esta tarefa foram as APIs do IBGE para captura de dados dos estados e municipios brasileiros e, a partir destes, a possibilidade de pesquisar noticias relacionadas a determinada localidade baseando-se na API de noticias do próprio IBGE. Devido ao carater de "prova de conceito" do projeto, as noticias foram limitadas aquelas disponibilizadas pela API do IBGE, entretanto o projeto pode ser escalado para outras APIs de noticias utilizando os mesmos conceitos.

### Informações sobre o projeto

O projeto foi construído como demonstração dos conhecimentos de frontend adquiridos durante o curso, visando a implementação de uma página criada utilizando React e interação com APIs públicas.

- Frontend: Criado utilizando HTML, CSS, Javascript e React. É responsivo em telas de >=1280px, 768px e 320px.
- API: Utilizou-se a API do IBGE para captura dos municipios, estados e noticias relacionadas a cada região.
- Cloud: O projeto foi hospedado no github pages.

Node version: 16.17.0
React version: 18.2.0

### Ajustes e melhorias

O projeto está em desenvolvimento, no momento em formato de POC (prova de conceito) e demonstra a funcionalidade do projeto. Devido a limitações da API de noticias do IBGE, a maioria das noticias relacionam-se aos estados da busca. Algumas melhorias a serem implementadas são:

- [ ] Utilizar uma API de noticias mais robustas.
- [ ] Backend próprio utilizando JS.
- [ ] Persistência do conteudo dinâmicamente usando banco de dados.
- [ ] Deploy do site em plataforma cloud (AWS/Azure/GCP)

### Rodando projeto

Para rodar o projeto da api localmente clone o repositório, entre na pasta e instale os pacotes com "npm install".
Para rodar o servidor localmente utilize:

### `npm run start`

### Projeto na nuvem

O resultado do projeto pode ser acessado no seguinte endereço:
https://pkams.github.io/city-news-searcher-frontend
