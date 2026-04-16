let projetos = [
    {
        nomeProjeto : "Projeto Web",
        imgProjeto : "https://hermes.dio.me/articles/cover/83483579-3e9c-4023-b220-b2d1b9b7313d.jpg"
    },
]

let idProjetos = document.getElementById("projetos");

projetos.map((e)=>{
    //Aqui criamos o Card de cada projeto
    let cardProjeto = document.createElement("div");

    //Aqui criamos o nome de cada projeto
    let nomeProjeto = document.createElement("h3");
    nomeProjeto.textContent = e.nomeProjeto;

    //Aqui criamos a imagem de cada projeto
    let imgProjeto = document.createElement("img");
    imgProjeto.src = e.imgProjeto;
    imgProjeto.style.width = "100px";

    cardProjeto.appendChild(nomeProjeto);
    cardProjeto.appendChild(imgProjeto);
    idProjetos.appendChild(cardProjeto);
    

})