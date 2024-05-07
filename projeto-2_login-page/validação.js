
        function validarFormulario(){
            var msg = document.getElementById("msg");
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;
            var csrfToken = document.getElementById("csrf_token").value;

            if(email.trim() === "" || senha.trim() === ""){
                msg.innerText = "Por favor, preencha todos os campos.";
                msg.style.color = "red";
                return false;
            }

            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)){
                msg.innerText = "Por favor, insira um e-mail válido.";
                msg.style.color = "red";
                return false;
            }

            if (senha.length < 8) {
                msg.innerText = "A senha deve ter pelo menos 8 caracteres.";
                msg.style.color = "red";
                return false;
            }

            var token = document.getElementById("csrf_token").value;
            if(token !== csrfToken){
                msg.innerText = "Erro de segurança detectado. Tente novamente.";
                msg.style.color = "red";
                return false;
            }

            msg.innerText = "";
            window.location.href = "home.html";
            return true;
        }
    