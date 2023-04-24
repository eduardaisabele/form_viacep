const limparForm = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('ibge').value = '';
    document.getElementById('ddd').value = '';
}

const preencherForm = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('ibge').value = endereco.ibge;
    document.getElementById('ddd').value = endereco.ddd;
}

const pesquisarCep = async() => {
    limparForm();

    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty('erro')) {
        alert('CEP não encontrado')
    }else {
        preencherForm(endereco);
    }
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);

