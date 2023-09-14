const numbers = document.querySelectorAll('.number');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        // Remove a classe 'selected' de todos os números
        numbers.forEach(n => {
            n.classList.remove('selected');
        });

        // Adiciona a classe 'selected' apenas ao número clicado
        number.classList.add('selected');
    });
});

// evento de clique ao botão "Submit"
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
    const selectedNumber = document.querySelector('.number.selected');
    if (selectedNumber) {
        const rating = selectedNumber.textContent;
        ratingState.style.display = 'none';
        thankYouState.style.display = 'block';
    } else {
        alert('Por favor, selecione uma classificação.');
    }
});