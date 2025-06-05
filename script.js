//Buscar um elemento no HTML e salva em uma varialvel
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-X")

//Função que vai abrir e fechar o menu
function abreFecharMenu(){

    //Se o menu está fechado
    if(menu.classList.contains("menu-fechado")){
        //Abrir o menu
        menu.classList.remove("menu-fechado")

        //Mostra o icone X
        iconeX.style.display = "inline"

        //Esconder o icone Barras
        iconeBarras.style.display = "none"
    }
    //Senão
    else{
        //Fechar o menu
        menu.classList.add("menu-fechado")

        //Esconder icone X
        iconeX.style.display = "none"

        //Mostra icone Barras
        iconeBarras.style.display = "inline"

    }

}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //Mostrar icone X
    iconeX.style.display = "inline"

    //Esconder icone barras
    iconeBarras.style.display = "none"
}