let inputValue = document.querySelector('#txtInput')

let buscarEndereco = () => {
    axios.get(`https://viacep.com.br/ws/${inputValue.value}/json/`)
    .then(response => {
        document.querySelector('#rua').innerHTML = `${response.data.logradouro}`
        document.querySelector('#bairro').innerHTML = `${response.data.bairro}`
        document.querySelector('#cidade').innerHTML = `${response.data.localidade}`
        document.querySelector('#uf').innerHTML = `${response.data.uf}`
    })
    .catch(() => {
        alert(`Cep não encontrado`)
    })
}