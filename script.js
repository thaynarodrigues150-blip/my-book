const telas = {

    login: document.getElementById("telaLogin"),

    usuarios: document.getElementById("telaUsuarios"),

    inicio: document.getElementById("telaInicio"),

    genero: document.getElementById("telaGenero"),

    detalhes: document.getElementById("telaDetalhes"),

    opiniao: document.getElementById("telaOpiniao"),

    escreverOpiniao:
        document.getElementById("telaEscreverOpiniao"),

    lista:
        document.getElementById("telaListaDesejos")

};




let telaAtual = telas.login;

let telaAnterior = null;



function mostrarTela(tela) {

    Object.values(telas).forEach(function(item) {

        item.classList.add("escondida");

    });


    tela.classList.remove("escondida");


    telaAnterior = telaAtual;

    telaAtual = tela;


    fecharMenu();

}



const entrar =
    document.getElementById("entrar");


entrar.addEventListener("click", function() {

    mostrarTela(telas.usuarios);

});




document
    .getElementById("entrarGoogle")
    .addEventListener("click", function() {

        mostrarTela(telas.usuarios);

    });




document
    .getElementById("novoUsuario")
    .addEventListener("click", function() {

        mostrarTela(telas.inicio);

    });




document
    .getElementById("perfilInicio")
    .addEventListener("click", function() {

        telaAnterior = telas.inicio;

        mostrarTela(telas.usuarios);

    });




const menu =
    document.getElementById("menuLateral");


const fechar =
    document.getElementById("fecharMenu");


const botoesHamburguer =
    document.querySelectorAll("[data-menu]");


function abrirMenu() {

    menu.classList.add("aberto");

}


function fecharMenu() {

    menu.classList.remove("aberto");

}


botoesHamburguer.forEach(function(botao) {

    botao.addEventListener("click", function(event) {

        event.stopPropagation();

        abrirMenu();

    });

});


fechar.addEventListener("click", function() {

    fecharMenu();

});



document.addEventListener("click", function(event) {

    if (
        menu.classList.contains("aberto") &&
        !menu.contains(event.target) &&
        !event.target.closest("[data-menu]")
    ) {

        fecharMenu();

    }

});




const filmes = {

    ritmo: {

        nome: "Ritmo Quente",

        ano: "1987",

        imagem: "img/ritmoquente.jpg",

        generos:
            "Romance | Drama | Música",

        duracao: "1h 40min",

        classificacao: "+12",

        elenco:
            "Patrick Swayze, Jennifer Grey, Jerry Orbach, Cynthia Rhodes",

        direcao:
            "Emile Ardolino",

        temas:
            "Amor proibido, Dança, Superação, Juventude, Relações familiares",

        sinopse:
            'Nas férias de verão, Frances "Baby" Houseman conhece Johnny Castle, o talentoso instrutor de dança do resort onde sua família está hospedada. Ao se aproximarem durante os ensaios, os dois vivem um romance intenso que desafia diferenças sociais, expectativas familiares e transforma suas vidas para sempre.'

    },


    maze: {

        nome:
            "Maze Runner: Correr ou Morrer",

        ano: "2014",

        imagem: "img/mazerunner.jpg",

        generos:
            "Ação | Ficção científica | Suspense",

        duracao: "1h 53min",

        classificacao: "+14",

        elenco:
            "Dylan O'Brien, Thomas Brodie-Sangster, Kaya Scodelario",

        direcao:
            "Wes Ball",

        temas:
            "Mistério, sobrevivência, amizade e aventura",

        sinopse:
            "Thomas acorda em um lugar misterioso sem lembrar de seu passado. Ele descobre que está preso com outros jovens em uma área cercada por um enorme labirinto. Juntos, eles precisam descobrir uma maneira de escapar."

    },


    corra: {

        nome:
            "Corra!",

        ano: "2017",

        imagem: "img/getout.jpg",

        generos:
            "Suspense | Terror | Mistério",

        duracao: "1h 44min",

        classificacao: "+14",

        elenco:
            "Daniel Kaluuya, Allison Williams, Bradley Whitford",

        direcao:
            "Jordan Peele",

        temas:
            "Mistério, tensão, família e segredos",

        sinopse:
            "Chris visita a família de sua namorada durante um fim de semana. O que inicialmente parece uma visita tranquila começa a ficar cada vez mais estranho, enquanto ele percebe que existem segredos escondidos naquela casa."

    },


    conjuring: {

        nome:
            "Invocação do Mal",

        ano: "2013",

        imagem: "img/conjuring.jpg",

        generos:
            "Terror | Suspense | Mistério",

        duracao: "1h 52min",

        classificacao: "+14",

        elenco:
            "Vera Farmiga, Patrick Wilson, Lili Taylor",

        direcao:
            "James Wan",

        temas:
            "Casa assombrada, investigação, família e sobrenatural",

        sinopse:
            "Uma família começa a enfrentar acontecimentos sobrenaturais depois de se mudar para uma antiga casa. Os investigadores Ed e Lorraine Warren são chamados para ajudar a descobrir o que está acontecendo e enfrentar uma presença assustadora."

    }

};




let filmeAtual = "ritmo";




function abrirDetalhes(nomeFilme) {

    const filme = filmes[nomeFilme];

    if (!filme) return;


    filmeAtual = nomeFilme;


    document
        .getElementById("imagemDetalhes")
        .src = filme.imagem;


    document
        .getElementById("imagemDetalhes")
        .alt = filme.nome;


    document
        .getElementById("textoDetalhes")
        .innerHTML = `

            <div>
                ${filme.nome} (${filme.ano})
            </div>

            <div>
                • ${filme.duracao}
            </div>

            <div>
                • ${filme.generos}
            </div>

            <div>
                • ${filme.classificacao}
            </div>

            <div>
                Elenco: ${filme.elenco}
            </div>

            <div>
                Direção: ${filme.direcao}
            </div>

            <div>
                Gêneros: ${filme.generos}
            </div>

            <div>
                Temas: ${filme.temas}
            </div>

        `;


    document
        .getElementById("sinopseDetalhes")
        .textContent = filme.sinopse;


    mostrarTela(telas.detalhes);

}




document
    .querySelectorAll(".cartaz")
    .forEach(function(cartaz) {

        cartaz.addEventListener("click", function() {

            abrirDetalhes(
                cartaz.dataset.filme
            );

        });

    });



document
    .getElementById("voltarDetalhes")
    .addEventListener("click", function() {

        mostrarTela(telaAnterior || telas.inicio);

    });




const filmesGenero =
    document.getElementById("filmesGenero");


const filmesPorGenero = {

    terror: "conjuring",

    romance: "ritmo",

    acao: "maze",

    suspense: "corra"

};



function abrirGenero(genero) {

    const nomeFilme =
        filmesPorGenero[genero];

    const filme =
        filmes[nomeFilme];


    if (!filme) return;


    filmesGenero.innerHTML = "";


    for (let i = 0; i < 10; i++) {

        const cartaz =
            document.createElement("div");

        cartaz.classList.add("cartaz");


        cartaz.dataset.filme =
            nomeFilme;


        cartaz.innerHTML = `

            <img
                src="${filme.imagem}"
                alt="${filme.nome}"
            >

        `;


        cartaz.addEventListener(
            "click",
            function() {

                abrirDetalhes(nomeFilme);

            }
        );


        filmesGenero.appendChild(cartaz);

    }


    mostrarTela(telas.genero);

}



document
    .querySelectorAll("[data-genero]")
    .forEach(function(botao) {

        botao.addEventListener(
            "click",
            function() {

                const genero =
                    botao.dataset.genero;

                abrirGenero(genero);

            }
        );

    });



document
    .getElementById("botaoLista")
    .addEventListener("click", function() {

        mostrarTela(telas.lista);

    });




document
    .getElementById("voltarLista")
    .addEventListener("click", function() {

        mostrarTela(
            telaAnterior || telas.inicio
        );

    });



document
    .querySelectorAll(".item-lista")
    .forEach(function(item) {

        item.addEventListener("click", function() {

            abrirDetalhes(
                item.dataset.filme
            );

        });

    });



document
    .getElementById("botaoOpiniao")
    .addEventListener("click", function() {

        mostrarTela(telas.opiniao);

    });




document
    .getElementById("escreverOpiniao")
    .addEventListener("click", function() {

        mostrarTela(
            telas.escreverOpiniao
        );

    });



document
    .getElementById("voltarOpiniao")
    .addEventListener("click", function() {

        mostrarTela(
            telaAnterior || telas.inicio
        );

    });




document
    .getElementById("voltarEscreverOpiniao")
    .addEventListener("click", function() {

        mostrarTela(telas.opiniao);

    });




document
    .getElementById("enviarComentario")
    .addEventListener("click", function() {

        const campo =
            document.getElementById("novoComentario");


        const comentario =
            campo.value.trim();


        if (comentario === "") {

            alert("Escreva um comentário primeiro.");

            return;

        }


        alert("Comentário enviado!");


        campo.value = "";

    });

