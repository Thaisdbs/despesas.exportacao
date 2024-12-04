// Array para armazenar as despesas
let despesas = [];

// Função para adicionar uma nova despesa
function adicionarDespesa(event) {
    event.preventDefault();

    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (!descricao || isNaN(valor) || valor <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Adiciona a despesa ao array
    despesas.push({ descricao, valor });

    // Limpa os campos do formulário
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';

    // Atualiza a tabela e o total
    atualizarTabela();
    atualizarTotal();
}

// Função para atualizar a tabela de despesas
function atualizarTabela() {
    const tbody = document.querySelector('#tabela-despesas tbody');
    tbody.innerHTML = '';

    despesas.forEach(despesa => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${despesa.descricao}</td><td>R$ ${despesa.valor.toFixed(2)}</td>`;
        tbody.appendChild(tr);
    });
}

// Função para atualizar o total de despesas
function atualizarTotal() {
    const total = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);
    document.getElementById('total-valor').innerText = total.toFixed(2);
}

// Adiciona o evento ao formulário
document.getElementById('despesa-form').addEventListener('submit', adicionarDespesa);
