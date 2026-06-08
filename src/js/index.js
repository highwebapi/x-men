/* ----------------------- ANIMATION ----------------------- */

const itemCiclope = document.getElementById('ciclope')
const itemJeanGrey = document.getElementById('jean-grey')
const itemLinceNegra = document.getElementById('lince-negra')
const itemTempestade = document.getElementById('tempestade')
const itemVampira = document.getElementById('vampira')
const itemWolverine = document.getElementById('noturno')
const itemMagneto = document.getElementById('magneto')
/* --------------------------------------------------------- */

// LISTA DE PERSONAGENS
const personagemLista = document.querySelectorAll('.personagem')

// Adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse
personagemLista.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        //Para smartphone
        if(window.innerWidth <450){
            window.scrollTo({top:0,behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem()

        personagem.classList.add('selecionado');
        
        alterarImagemPersonagemSelecionado(personagem)

        alterarNomePersonagemSelecionado(personagem)

        alterarDescricaoPersonagem(personagem)

    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem')

    descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')

    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')

    const idPersonagem = personagem.attributes.id.value

    // Template String - uso de CRASE ` `
    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}
