function verificarResposta(pergunta, resposta) {
    if (pergunta === 1) {
        switch (resposta) {
            case 1:
                alert("Que pena, você não acertou. Tente novamente!")
                break;
            case 2:
                alert("Você foi fera! Resposta correta.")
                window.location = 'pagina2.html';
                break;
            case 3:
                alert("Poxa, não foi dessa vez!")
                break;
            case 4:
                alert("Resposta errada. Tente mais uma vez!")
                break;
        }
    } else if (pergunta === 2) {
        switch (resposta) {
            case 1:
                alert("Ops, você errou. Tente novamente!")
                break;
            case 2:
                alert("Parabéns! Sabe muito!")
                window.location = 'pagina3.html'
                break;
            case 3:
                alert("Você errou. Vamos tentar mais uma vez?")
                break;
            case 4:
                alert("Lamento, resposta errada.")
                break;
        }
    } else if (pergunta === 3) {
        switch (resposta) {
            case 1:
                alert("Errou. Que tal tentar de novo?")
                break;
            case 2:
                alert("Essa não é a resposta correta. Escolha outra.")
                break;
            case 3:
                alert("Resposta incorreta. Tente outra opção.")
                break;
            case 4:
                alert("Excelente! Você é fera!")
                window.location = 'pagina4.html'
                break;
        }
    } else if (pergunta === 4) {
        switch (resposta) {
            case 1:
                alert("Está incorreto. Continue tentando!")
                break;
            case 2:
                alert("Resposta errada. Tente novamente!")
                break;
            case 3:
                alert("Não foi dessa vez. Escolha outra opção.")
                break;
            case 4:
                alert("Certa a resposta. Parabéns!")
                window.location = 'pagina5.html'
                break;
        }
    } else if (pergunta === 5) {
        switch (resposta) {
            case 1:
                alert("Lamento, resposta errada.")
                break;
            case 2:
                alert("Muito bom, você está de parabéns!")
                window.location = 'pagina6.html'
                break;
            case 3:
                alert("Que pena. Tente novamente!")
                break;
            case 4:
                alert("Não foi dessa vez. Tente de novo!")
                break;
        }
    } else if (pergunta === 6) {
        switch (resposta) {
            case 1:
                alert("Resposta errada. Tente novamente!")
                break;
            case 2:
                alert("Resposta incorreta. Vamos tentar mais uma vez?")
                break;
            case 3:
                alert("Que pena, você errou. Tente novamente!")
                break;
            case 4:
                alert("Você foi muito bem! Resposta correta.")
                window.location = 'pagina7.html'
                break;
        }
    } else if (pergunta === 7) {
        switch (resposta) {
            case 1:
                alert("Errou!")
                break;
            case 2:
                alert("Não é essa a resposta. Tente novamente!")
                break;
            case 3:
                alert("Essa não é a resposta correta. Tente outra.")
                break;
            case 4:
                alert("Muito bem! Você acertou.")
                window.location = 'pagina8.html'
                break;
        }
    }
}

function startQuiz() {
    window.location = 'pagina1.html';
}