// ==========================================
// TELAX - JAVASCRIPT
// PARTES 1, 2, 3, 4 E 5
// ==========================================


// ==========================================
// PEGANDO AS TELAS
// ==========================================

const telaLogin = document.getElementById("telaLogin");
const telaUsuarios = document.getElementById("telaUsuarios");
const telaInicio = document.getElementById("telaInicio");
const telaParte4 = document.getElementById("telaParte4");
const telaParte5 = document.getElementById("telaParte5");


// ==========================================
// PARTE 1 - LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {

        alert("Preencha todos os campos!");

        return;
    }

    // Vai para a Parte 2
    telaLogin.style.display = "none";
    telaUsuarios.style.display = "block";

});


// ==========================================
// PARTE 1 - LOGIN COM GOOGLE
// ==========================================

const googleButton =
    document.getElementById("googleButton");

googleButton.addEventListener("click", function() {

    alert("Login com Google");

});


// ==========================================
// PARTE 2 - SELECIONAR USUÁRIO
// ==========================================

const usuario =
    document.getElementById("usuario");

usuario.addEventListener("click", function() {

    // Esconde Parte 2
    telaUsuarios.style.display = "none";

    // Mostra Parte 3
    telaInicio.style.display = "block";

});


// ==========================================
// PARTE 2 - ADICIONAR USUÁRIO
// ==========================================

const adicionarUsuario =
    document.getElementById("adicionarUsuario");

adicionarUsuario.addEventListener("click", function() {

    alert("Criar novo usuário!");

});


// ==========================================
// PARTE 3 - MENU HAMBÚRGUER
// ==========================================

const hamburguer =
    document.getElementById("hamburguer");

const menuLateral =
    document.getElementById("menuLateral");


hamburguer.addEventListener("click", function() {

    if (menuLateral.style.display === "block") {

        menuLateral.style.display = "none";

    } else {

        menuLateral.style.display = "block";

    }

});


// ==========================================
// PARTE 3 - PESQUISA
// ==========================================

const campoPesquisa =
    document.getElementById("campoPesquisa");

const botaoPesquisa =
    document.getElementById("botaoPesquisa");


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


// ==========================================
// PARTE 3 - BOTÃO USUÁRIO
// ==========================================

const botaoUsuario =
    document.getElementById("botaoUsuario");


botaoUsuario.addEventListener("click", function() {

    alert("Perfil do usuário");

});


// ==========================================
// PARTE 3 - FILMES → PARTE 4
// ==========================================

const filmesParte3 =
    document.querySelectorAll("#telaInicio .filme");


filmesParte3.forEach(function(filme) {

    filme.addEventListener("click", function() {

        telaInicio.style.display = "none";

        menuLateral.style.display = "none";

        telaParte4.style.display = "block";

    });

});


// ==========================================
// PARTE 3 - SETAS
// ==========================================

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


// ==========================================
// PARTE 3 - ITENS DO MENU
// ==========================================

const itensMenu =
    document.querySelectorAll("#menuLateral .menu-item");


itensMenu.forEach(function(item) {

    item.addEventListener("click", function() {

        const opcao =
            item.textContent.trim();

        alert("Você selecionou: " + opcao);

    });

});


// ==========================================
// PARTE 4 - MENU HAMBÚRGUER
// ==========================================

const hamburguer4 =
    document.getElementById("hamburguer4");

const menuLateral4 =
    document.getElementById("menuLateral4");


hamburguer4.addEventListener("click", function() {

    if (menuLateral4.style.display === "block") {

        menuLateral4.style.display = "none";

    } else {

        menuLateral4.style.display = "block";

    }

});


// ==========================================
// PARTE 4 - PESQUISA
// ==========================================

const campoPesquisa4 =
    document.getElementById("campoPesquisa4");

const botaoPesquisa4 =
    document.getElementById("botaoPesquisa4");


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


// ==========================================
// PARTE 4 - BOTÃO USUÁRIO
// ==========================================

const botaoUsuario4 =
    document.getElementById("botaoUsuario4");


botaoUsuario4.addEventListener("click", function() {

    alert("Perfil do usuário");

});


// ==========================================
// PARTE 4 - SETAS
// ==========================================

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


// ==========================================
// PARTE 4 - ITENS DO MENU
// ==========================================

const itensMenu4 =
    document.querySelectorAll("#menuLateral4 .menu-item");


itensMenu4.forEach(function(item) {

    item.addEventListener("click", function() {

        const opcao =
            item.textContent.trim();

        alert("Você selecionou: " + opcao);

    });

});


// ==========================================
// PARTE 4 - FILMES → PARTE 5
// ==========================================

const filmesParte4 =
    document.querySelectorAll("#telaParte4 .filme");


filmesParte4.forEach(function(filme) {

    filme.addEventListener("click", function() {

        telaParte4.style.display = "none";

        menuLateral4.style.display = "none";

        telaParte5.style.display = "block";

    });

});




const hamburguer5 =
    document.getElementById("hamburguer5");

const menuLateral5 =
    document.getElementById("menuLateral5");


hamburguer5.addEventListener("click", function() {

    if (menuLateral5.style.display === "block") {

        menuLateral5.style.display = "none";

    } else {

        menuLateral5.style.display = "block";

    }

});




const campoPesquisa5 =
    document.getElementById("campoPesquisa5");

const botaoPesquisa5 =
    document.getElementById("botaoPesquisa5");


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



const botaoUsuario5 =
    document.getElementById("botaoUsuario5");


botaoUsuario5.addEventListener("click", function() {

    alert("Perfil do usuário");

});




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

        alert("Você selecionou: " + opcao);

    });

});