// Função para fazer a requisição do JSON
function carregarJSON(category) {
    // Realiza uma requisição HTTP para carregar o arquivo JSON
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                if (element.category.toLowerCase() == category) {
                    // Acesse os dados do JSON e exiba-os na página
                    const dadosContainer = document.getElementById(category);
                    dadosContainer.innerHTML = `
          <div class="icon-text">
          <img src="${element.icon}" alt="category icon">
          <p>${element.category}</p>
        </div>
        <p>${element.score} / 100</p>
        `;
                }
            });
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

// Chame a função para carregar o JSON quando a página for carregada
window.onload = carregarJSON("reaction");
window.onload = carregarJSON("memory");
window.onload = carregarJSON("verbal");
window.onload = carregarJSON("visual");


