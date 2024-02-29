function alterarStatus(id){
     // Seleciona o botão do jogo com base no ID recebido
    var botao = document.querySelector(`#game-${id} .dashboard__item__button`);
    // Seleciona a imagem do jogo com base no ID recebido
    var imagem = document.querySelector(`#game-${id} .dashboard__item__img`);
    // Verifica se o texto do botão é 'Alugar'
    if (botao.textContent === 'Alugar') {
        // Se for 'Alugar', muda o texto do botão para 'Devolver'
        botao.textContent = 'Devolver';
        // Adiciona a classe 'dashboard__item__button--return' ao botão
        botao.classList.add('dashboard__item__button--return');
        // Adiciona a classe 'dashboard__item__img--rented' à imagem
        imagem.classList.add('dashboard__item__img--rented');
        
    
    }else if (botao.textContent === 'Devolver'){
        botao.textContent = 'Alugar';
        // Se o texto do botão for 'Devolver'
        // Muda o texto do botão para 'Alugar'
        botao.classList.remove('dashboard__item__button--return');
        // Remove a classe 'dashboard__item__button--return' do botão
        imagem.classList.remove('dashboard__item__img--rented');
        // Remove a classe 'dashboard__item__img--rented' da imagem
    }

}

