
let shoppingCart = {
    titulo: "Shopping Cart",
    imgAttr: 'src',
    imgEndereco: "../assets/img/Joe's Store.png",
    paragrafo: `Shopping cart desenvolvido como projeto final para o curso básico de Front-End 
    da <a href="https://totidiversidade.com.br/" target="_blank">Toti-Diversidade.</a></br>

    Foram implementadas funções para criação de cards dinâmicos no shopping cart além
    de utilizar o local-storage do navegador para armazenar eles e tornar possível a criação dos mesmos.`
}


let verificadorDeIdade = {
    titulo: "Verificador de Idade",
    imgAttr: 'src',
    imgEndereco: "../assets/img/verificador-idade.png",
    paragrafo: ` Projeto desenvolvido no curso de javascipt, pelo professor Gustavo Guanabara do canal
    <a href="https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm">Curso em Video.</a></br>
    
    Foram implementadas funções para inserir imagens no site de forma dinâmica, 
    fazendo uso aritmética para realização dos cálculos para assim obter a idade.`
}


let Tabuada = {
    titulo: "Tabuada",
    imgAttr: 'src',
    imgEndereco: "../assets/img/Tabuada.png",
    paragrafo: `  A tabuada é uma representação em forma de tabela utilizada para fazer cálculos das operações matemáticas: adição, subtração, multiplicação e divisão. 
    Ela contempla os dez algarismos: 1, 2, 3, 4, 5, 6, 7, 8, 9 e 10, que são apresentados por colunas e linhas definidas de acordo com o tipo de cálculo que será feito.</br>
    
    Este tipo é o mais utilizado e mais conhecido. Podemos dizer que é possível 
    que muitas pessoas nem conheçam os outros tipos.`
}



let title = document.querySelector("#title")
let titulo = document.querySelector("#titulo")
let imagem = document.querySelector(".imagens-prin-pags")
let paragrafo = document.querySelector("#paragrafo")

title.innerHTML = shoppingCart.titulo
titulo.innerHTML = shoppingCart.titulo
imagem.setAttribute(shoppingCart.imgAttr, shoppingCart.imgEndereco)
paragrafo.innerHTML = shoppingCart.paragrafo









