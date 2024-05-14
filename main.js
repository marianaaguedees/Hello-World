let nome_usuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nome_usuário == ""){
    nome_usuário = prompt("Qual o seu nome?");
}

if(nome_usuário == null){
    elemento.textContent = 'Seja muito bem-Vindo';
}else{
    elemento.textContent = nome_usuário;
}

