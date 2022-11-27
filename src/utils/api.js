class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getUf() {
    return fetch(`${this.baseUrl}/v1/localidades/estados/`).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  getCities(selectedUf) {
    return fetch(
      `${this.baseUrl}/v1/localidades/estados/${selectedUf}/municipios`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  getNews(selectedUf, selectedCity, selectedDate) {
    let url_call = `https://servicodados.ibge.gov.br/api/v3/noticias/?busca=${
      selectedCity.split(' ').join('%20').trim() + '%20' + selectedUf.trim()
    }&de=${selectedDate}`;

    return fetch(url_call);
  }
}

const api = new Api({
  baseUrl: 'https://servicodados.ibge.gov.br/api',
});

export default api;
