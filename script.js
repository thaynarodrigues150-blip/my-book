
const telaLogin = document.getElementById("telaLogin");
const telaUsuarios = document.getElementById("telaUsuarios");
const telaInicio = document.getElementById("telaInicio");
const telaParte4 = document.getElementById("telaParte4");
const telaParte5 = document.getElementById("telaParte5");
const telaOpiniao = document.getElementById("telaOpiniao");



const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email === "" || senha === "") {

            alert("Preencha todos os campos!");

            return;
        }

        telaLogin.style.display = "none";
        telaUsuarios.style.display = "block";

    });

}



const googleButton = document.getElementById("googleButton");

if (googleButton) {

    googleButton.addEventListener("click", function() {

        alert("Login com Google");

    });

}


const usuario = document.getElementById("usuario");

if (usuario) {

    usuario.addEventListener("click", function() {

        telaUsuarios.style.display = "none";

        telaInicio.style.display = "block";

    });

}



const adicionarUsuario =
    document.getElementById("adicionarUsuario");

if (adicionarUsuario) {

    adicionarUsuario.addEventListener("click", function() {

        alert("Criar novo usuário!");

    });

}


const hamburguer =
    document.getElementById("hamburguer");

const menuLateral =
    document.getElementById("menuLateral");


if (hamburguer && menuLateral) {

    hamburguer.addEventListener("click", function() {

        if (menuLateral.style.display === "block") {

            menuLateral.style.display = "none";

        } else {

            menuLateral.style.display = "block";

        }

    });

}



const campoPesquisa =
    document.getElementById("campoPesquisa");

const botaoPesquisa =
    document.getElementById("botaoPesquisa");


if (botaoPesquisa && campoPesquisa) {

    botaoPesquisa.addEventListener("click", function() {

        const pesquisa =
            campoPesquisa.value.trim();

        if (pesquisa === "") {

            alert("Digite o nome de um filme!");

        } else {

            alert("Você pesquisou por: " + pesquisa);

        }

    });


    campoPesquisa.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            botaoPesquisa.click();

        }

    });

}


const botaoUsuario =
    document.getElementById("botaoUsuario");


if (botaoUsuario) {

    botaoUsuario.addEventListener("click", function() {

        alert("Perfil do usuário");

    });

}



const filmesParte3 =
    document.querySelectorAll("#telaInicio .filme");


filmesParte3.forEach(function(filme) {

    filme.addEventListener("click", function() {

        telaInicio.style.display = "none";

        if (menuLateral) {
            menuLateral.style.display = "none";
        }

        telaParte4.style.display = "block";

    });

});



const setasEsquerda =
    document.querySelectorAll("#telaInicio .seta.esquerda");

const setasDireita =
    document.querySelectorAll("#telaInicio .seta.direita");


setasEsquerda.forEach(function(seta) {

    seta.addEventListener("click", function(event) {

        event.stopPropagation();

        alert("Filmes anteriores");

    });

});


setasDireita.forEach(function(seta) {

    seta.addEventListener("click", function(event) {

        event.stopPropagation();

        alert("Próximos filmes");

    });

});




const itensMenu =
    document.querySelectorAll("#menuLateral .menu-item");


itensMenu.forEach(function(item) {

    item.addEventListener("click", function() {

        const opcao =
            item.textContent.trim();


        if (
            opcao.toLowerCase().includes("opinião") ||
            opcao.toLowerCase().includes("opiniao") ||
            opcao.toLowerCase().includes("opnião") ||
            opcao.toLowerCase().includes("opniao")
        ) {

            abrirTelaOpiniao();

        } else {

            alert("Você selecionou: " + opcao);

        }

    });

});




const hamburguer4 =
    document.getElementById("hamburguer4");

const menuLateral4 =
    document.getElementById("menuLateral4");


if (hamburguer4 && menuLateral4) {

    hamburguer4.addEventListener("click", function() {

        if (menuLateral4.style.display === "block") {

            menuLateral4.style.display = "none";

        } else {

            menuLateral4.style.display = "block";

        }

    });

}



const campoPesquisa4 =
    document.getElementById("campoPesquisa4");

const botaoPesquisa4 =
    document.getElementById("botaoPesquisa4");


if (botaoPesquisa4 && campoPesquisa4) {

    botaoPesquisa4.addEventListener("click", function() {

        const pesquisa =
            campoPesquisa4.value.trim();

        if (pesquisa === "") {

            alert("Digite o nome de um filme!");

        } else {

            alert("Você pesquisou por: " + pesquisa);

        }

    });


    campoPesquisa4.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            botaoPesquisa4.click();

        }

    });

}




const botaoUsuario4 =
    document.getElementById("botaoUsuario4");


if (botaoUsuario4) {

    botaoUsuario4.addEventListener("click", function() {

        alert("Perfil do usuário");

    });

}



const setasEsquerda4 =
    document.querySelectorAll("#telaParte4 .seta.esquerda");

const setasDireita4 =
    document.querySelectorAll("#telaParte4 .seta.direita");


setasEsquerda4.forEach(function(seta) {

    seta.addEventListener("click", function(event) {

        event.stopPropagation();

        alert("Filmes anteriores");

    });

});


setasDireita4.forEach(function(seta) {

    seta.addEventListener("click", function(event) {

        event.stopPropagation();

        alert("Próximos filmes");

    });

});



const itensMenu4 =
    document.querySelectorAll("#menuLateral4 .menu-item");


itensMenu4.forEach(function(item) {

    item.addEventListener("click", function() {

        const opcao =
            item.textContent.trim();


        if (
            opcao.toLowerCase().includes("opinião") ||
            opcao.toLowerCase().includes("opiniao") ||
            opcao.toLowerCase().includes("opnião") ||
            opcao.toLowerCase().includes("opniao")
        ) {

            abrirTelaOpiniao();

        } else {

            alert("Você selecionou: " + opcao);

        }

    });

});




const filmesParte4 =
    document.querySelectorAll("#telaParte4 .filme");


filmesParte4.forEach(function(filme) {

    filme.addEventListener("click", function() {

        telaParte4.style.display = "none";

        if (menuLateral4) {
            menuLateral4.style.display = "none";
        }

        telaParte5.style.display = "block";

    });

});



const hamburguer5 =
    document.getElementById("hamburguer5");

const menuLateral5 =
    document.getElementById("menuLateral5");


if (hamburguer5 && menuLateral5) {

    hamburguer5.addEventListener("click", function() {

        if (menuLateral5.style.display === "block") {

            menuLateral5.style.display = "none";

        } else {

            menuLateral5.style.display = "block";

        }

    });

}



const campoPesquisa5 =
    document.getElementById("campoPesquisa5");

const botaoPesquisa5 =
    document.getElementById("botaoPesquisa5");


if (botaoPesquisa5 && campoPesquisa5) {

    botaoPesquisa5.addEventListener("click", function() {

        const pesquisa =
            campoPesquisa5.value.trim();

        if (pesquisa === "") {

            alert("Digite o nome de um filme!");

        } else {

            alert("Você pesquisou por: " + pesquisa);

        }

    });


    campoPesquisa5.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            botaoPesquisa5.click();

        }

    });

}



const botaoUsuario5 =
    document.getElementById("botaoUsuario5");


if (botaoUsuario5) {

    botaoUsuario5.addEventListener("click", function() {

        alert("Perfil do usuário");

    });

}



const setasEsquerda5 =
    document.querySelectorAll("#telaParte5 .seta.esquerda");

const setasDireita5 =
    document.querySelectorAll("#telaParte5 .seta.direita");


setasEsquerda5.forEach(function(seta) {

    seta.addEventListener("click", function(event) {

        event.stopPropagation();

        alert("Filmes anteriores");

    });

});


setasDireita5.forEach(function(seta) {

    seta.addEventListener("click", function(event) {

        event.stopPropagation();

        alert("Próximos filmes");

    });

});



const itensMenu5 =
    document.querySelectorAll("#menuLateral5 .menu-item");


itensMenu5.forEach(function(item) {

    item.addEventListener("click", function() {

        const opcao =
            item.textContent.trim();


        if (
            opcao.toLowerCase().includes("opinião") ||
            opcao.toLowerCase().includes("opiniao") ||
            opcao.toLowerCase().includes("opnião") ||
            opcao.toLowerCase().includes("opniao")
        ) {

            abrirTelaOpiniao();

        } else {

            alert("Você selecionou: " + opcao);

        }

    });

});




let filmeAtual = "Ritmo Quente";




const opinioes = {

    "Ritmo Quente": [
        {
            usuario: "@aninha.123",
            texto: "Adorei esse filme!"
        },
        {
            usuario: "@joaozinho",
            texto: "Muito bom, gostei bastante."
        },
        {
            usuario: "@maria.filmes",
            texto: "O romance ficou muito legal."
        },
        {
            usuario: "@carlos123",
            texto: "Com certeza assistiria novamente!"
        }
    ],

    "Aventura Final": [
        {
            usuario: "@pedro.movie",
            texto: "Foi muito emocionante."
        },
        {
            usuario: "@jujuba",
            texto: "Gostei muito da história."
        },
        {
            usuario: "@filmes_da_ana",
            texto: "Final surpreendente!"
        }
    ],

    "Noite Sombria": [
        {
            usuario: "@darkmovie",
            texto: "Muito suspense!"
        },
        {
            usuario: "@biafilmes",
            texto: "Gostei bastante."
        },
        {
            usuario: "@gabi123",
            texto: "O filme prende do começo ao fim."
        }
    ]

};


function abrirTelaOpiniao() {


    if (telaLogin) {
        telaLogin.style.display = "none";
    }

    if (telaUsuarios) {
        telaUsuarios.style.display = "none";
    }

    if (telaInicio) {
        telaInicio.style.display = "none";
    }

    if (telaParte4) {
        telaParte4.style.display = "none";
    }

    if (telaParte5) {
        telaParte5.style.display = "none";
    }



    if (menuLateral) {
        menuLateral.style.display = "none";
    }

    if (menuLateral4) {
        menuLateral4.style.display = "none";
    }

    if (menuLateral5) {
        menuLateral5.style.display = "none";
    }


 

    if (telaOpiniao) {

        telaOpiniao.style.display = "block";

    }



    const titulo =
        document.querySelector("#telaOpiniao h1");


    if (titulo) {

        titulo.textContent =
            "opnião sobre " + filmeAtual;

    }


    carregarOpinioes();

}




function carregarOpinioes() {

    const container =
        document.querySelector("#telaOpiniao .comentarios");


    if (!container) {

        return;

    }


    container.innerHTML = "";


    const lista =
        opinioes[filmeAtual] || [];


    lista.forEach(function(opiniao) {

        const comentario =
            document.createElement("div");


        comentario.classList.add("comentario");


        comentario.innerHTML = `

            <div class="foto-usuario">♙</div>

            <div class="texto-comentario">

                <span>${opiniao.usuario}</span>

                <p>${opiniao.texto}</p>

            </div>

        `;


        container.appendChild(comentario);

    });

}




const campoComentario =
    document.getElementById("campoComentario");


if (campoComentario) {

    campoComentario.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            const texto =
                campoComentario.value.trim();


            if (texto === "") {

                return;

            }


        

            if (!opinioes[filmeAtual]) {

                opinioes[filmeAtual] = [];

            }


      

            opinioes[filmeAtual].push({

                usuario: "@voce",

                texto: texto

            });


     

            campoComentario.value = "";



            carregarOpinioes();

        }

    });

}