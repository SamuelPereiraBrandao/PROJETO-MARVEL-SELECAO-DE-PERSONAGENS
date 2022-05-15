
/*
quando passar o mouse por cima, ele ficara selecionado
*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    const idSelecionado = personagem.attributes.id.value;
    // não permite selecionar o ultron(jogador 2)
   //  if(idSelecionado === 'ultron') return;
    personagem.addEventListener('click', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')
        // ao passar o mouse, vai alterar a imagem do jogador selecionado
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
        // mudar os nomes dos personagens
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;

    })
})
