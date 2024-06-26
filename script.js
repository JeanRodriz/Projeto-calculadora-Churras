document.getElementById('calculate-btn').addEventListener('click', calculate);

function calculate() {
    const men = parseInt(document.getElementById('men').value) || 0;
    const women = parseInt(document.getElementById('women').value) || 0;
    const children = parseInt(document.getElementById('children').value) || 0;

    const beef = ((men * 500) + (women * 300) + (children * 200)) / 1000;
    const chicken = ((men * 200) + (women * 200) + (children * 100)) / 1000;
    const sausage = ((men * 200) + (women * 200) + (children * 200)) / 1000;
    const soda = ((men * 300) + (women * 400) + (children * 200)) / 1000;
    const beer = ((men * 800) + (women * 500)) / 1000;

    const message = "Aqui estão os itens a serem comprados conforme o número de convidados."

    document.getElementById('message').textContent = message;
    document.getElementById('beef-result').textContent = `Carne bovina: ${beef.toFixed(2)} kg`;
    document.getElementById('chicken-result').textContent = `Frango: ${chicken.toFixed(2)} kg`;
    document.getElementById('sausage-result').textContent = `Linguiça: ${sausage.toFixed(2)} kg`;
    document.getElementById('soda-result').textContent = `Refrigerante: ${soda.toFixed(2)} litros`;
    document.getElementById('beer-result').textContent = `Cerveja: ${beer.toFixed(2)} litros`;
}