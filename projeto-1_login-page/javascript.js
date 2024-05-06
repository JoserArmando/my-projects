var msg = document.getElementById("alerta");
var registra = document.getElementById("but1");
registra.addEventListener("click", registro);

function registro(){    
    var nome = document.getElementById("nome").value;    
    var email = document.getElementById("email1").value;
    var senha = document.getElementById("senha").value;

    if(email1 === ""){
        alert("adicione um nome");
    }else{
        msg.innerHTML = "tudo certo";
    }
}