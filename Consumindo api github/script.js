let inputElement = document.querySelector('#txtInput')
let imgPerfil = document.querySelector('#img-perfil')

let buscarPerfil = () => {
    
    axios.get(`https://api.github.com/users/${inputElement.value}`)
    .then(response => {
        inputElement.style.marginLeft = '-16rem'
        imgPerfil.setAttribute('src', response.data.avatar_url)
        document.querySelector('#bio').innerHTML = `${response.data.bio}`
        
        if(response.data.email === null) document.querySelector('#email').innerHTML = `Email não cadastrado`
        else document.querySelector('#email').innerHTML = `E-mail: ${response.data.email}`

        if(response.data.name === null) document.querySelector('#name').innerHTML = `Nome não cadastrado`
        else document.querySelector('#name').innerHTML = `Nome: ${response.data.name}`

        if(response.data.bio === null) document.querySelector('#bio').innerHTML = `Biografia não cadastrada`
        else document.querySelector('#bio').innerHTML = `Biografia: ${response.data.bio}`
        
   console.log(response);
    })
    .catch(() => {
        alert(`Usuário não encontrado`)
    })
}