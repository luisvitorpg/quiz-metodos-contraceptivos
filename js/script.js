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
    } else if (pergunta === 8) {
        switch (resposta) {
            case 1:
                alert("Ainda não! Tente de novo, você consegue!");
                break;
            case 2:
                alert("Você foi muito bem! Resposta correta.");
                window.location = 'pagina9.html';
                break;
            case 3:
                alert("Quase lá! Tente novamente.");
                break;
            case 4:
                alert("Boa tentativa! Experimente outra opção.");
                break;
        }
    } else if (pergunta === 9) {
        switch (resposta) {
            case 1:
                alert("Resposta errada. Tente novamente!");
                break;
            case 2:
                alert("Não foi dessa vez. Tente de novo!");
                break;
            case 3:
                alert("Muito bem! Você acertou.");
                window.location = 'pagina10.html';
                break;
            case 4:
                alert("Boa tentativa, mas não é essa a resposta.");
                break;
        }
    } else if (pergunta === 10) {
        switch (resposta) {
            case 1:
                alert("Resposta incorreta. Tente novamente!");
                break;
            case 2:
                alert("Quase lá! Tente outra vez.");
                break;
            case 3:
                alert("Você foi muito bem! Resposta correta.");
                window.location = 'pagina11.html';
                break;
            case 4:
                alert("Essa não é a resposta certa. Tente novamente.");
                break;
        }
    } else if (pergunta === 11) {
        switch (resposta) {
            case 1:
                alert("Não foi dessa vez! Tente de novo!");
                break;
            case 2:
                alert("Você foi muito bem! Resposta correta.");
                window.location = 'pagina12.html';
                break;
            case 3:
                alert("Quase! Experimente outra opção.");
                break;
            case 4:
                alert("Continue tentando, você chega lá!");
                break;
        }
    } else if (pergunta === 12) {
        switch (resposta) {
            case 1:
                alert("Resposta errada. Tente novamente!");
                break;
            case 2:
                alert("Você foi muito bem! Resposta correta.");
                window.location = 'pagina13.html';
                break;
            case 3:
                alert("Boa tentativa, mas não é essa a resposta.");
                break;
            case 4:
                alert("Essa não é a resposta certa. Tente novamente.");
                break;
        }
    } else if (pergunta === 13) {
        switch (resposta) {
            case 1:
                alert("Resposta errada. Tente novamente!");
                break;
            case 2:
                alert("Boa tentativa, mas não é essa a resposta.");
                break;
            case 3:
                alert("Essa não é a resposta certa. Tente novamente.");
                break;
            case 4:
                alert("Excelente! Você acertou.");
                window.location = 'pagina14.html';
                break;
        }
    } else if (pergunta === 14) {
        switch (resposta) {
            case 1:
                alert("Parabéns! Você acertou.");
                window.location = 'pagina15.html';
                break;
            case 2:
                alert("Quase lá! Experimente outra opção.");
                break;
            case 3:
                alert("Boa tentativa! Tente novamente.");
                break;
            case 4:
                alert("Não foi dessa vez! Continue tentando.");
                break;
        }
    } else if (pergunta === 15) {
        switch (resposta) {
            case 1:
                alert("Excelente! Você acertou.");
                window.location = 'pagina16.html';
                break;
            case 2:
                alert("Quase! Tente outra opção.");
                break;
            case 3:
                alert("Não foi dessa vez! Continue tentando.");
                break;
            case 4:
                alert("Boa tentativa, mas você errou. Experimente novamente.");
                break;
        }
    } else if (pergunta === 16) {
        switch (resposta) {
            case 1:
                alert("Quase! Tente outra opção.");
                break;
            case 2:
                alert("Excelente! Você acertou.");
                window.location = 'pagina17.html';
                break;
            case 3:
                alert("Não foi dessa vez! Continue tentando.");
                break;
            case 4:
                alert("Boa tentativa! Experimente novamente.");
                break;
        }
    } else if (pergunta === 17) {
        switch (resposta) {
            case 1:
                alert("Resposta errada. Tente novamente!");
                break;
            case 2:
                alert("Muito bem! Você acertou.");
                window.location = 'pagina18.html';
                break;
            case 3:
                alert("Quase lá! Tente outra vez.");
                break;
            case 4:
                alert("Essa não é a resposta certa. Tente novamente.");
                break;
        }
    }
}

function startQuiz() {
    window.location = 'pagina1.html';
}