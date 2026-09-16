const telaListaDesejos =
    document.getElementById("telaListaDesejos");


const voltarListaDesejos =
    document.getElementById("voltarListaDesejos");


const hamburguerLista =
    document.getElementById("hamburguerLista");


const menuListaDesejos =
    document.getElementById("menuListaDesejos");


const fecharMenuLista =
    document.getElementById("fecharMenuLista");





const botoesMenu =
    document.querySelectorAll(".opcao-menu");


botoesMenu.forEach(function(botao) {

    if (
        botao.textContent
            .trim()
            .toLowerCase() === "lista de desejos"
    ) {

        botao.addEventListener("click", function() {

    

            window.telaAnteriorLista =
                document.querySelector(
                    ".tela:not(.escondida)"
                );


           

            if (window.telaAnteriorLista) {

                window.telaAnteriorLista
                    .classList
                    .add("escondida");

            }


        

            telaListaDesejos
                .classList
                .remove("escondida");


            

            const menuAntigo =
                document.querySelector(".menu-lateral");

            if (menuAntigo) {

                menuAntigo.classList.remove("aberto");

            }

        });

    }

});




voltarListaDesejos.addEventListener(
    "click",
    function() {

     

        telaListaDesejos
            .classList
            .add("escondida");


   

        if (window.telaAnteriorLista) {

            window.telaAnteriorLista
                .classList
                .remove("escondida");

        }

    }
);



hamburguerLista.addEventListener(
    "click",
    function() {

        menuListaDesejos
            .classList
            .add("aberto");

    }
);




fecharMenuLista.addEventListener(
    "click",
    function() {

        menuListaDesejos
            .classList
            .remove("aberto");

    }
);




document.addEventListener(
    "click",
    function(event) {

        const clicouNoMenu =
            menuListaDesejos.contains(event.target);

        const clicouNoHamburguer =
            hamburguerLista.contains(event.target);


        if (
            !clicouNoMenu &&
            !clicouNoHamburguer
        ) {

            menuListaDesejos
                .classList
                .remove("aberto");

        }

    }
);





const filmesDaLista =
    document.querySelectorAll(".filme-desejo");


filmesDaLista.forEach(function(filme) {

    filme.addEventListener(
        "click",
        function() {

            console.log(
                "Filme selecionado:",
                filme.dataset.filme
            );

        }
    );

});