function validacao() {
    var formulario = document.register;
    var nome = formulario.nome;
    var sobrenome = formulario.sobrenome;
    var cargo = formulario.cargo;
    var empresa = formulario.empresa;
    var email = formulario.email;
    
    if (nome.value == "") {
        alert("Insira um nome válido.");
        return false;
    }

    if (sobrenome.value == "") {
        alert("Insira um sobrenome válido.");
        return false;
    }

    if (empresa.value == "") {
        alert("Insira o nome da sua empresa.");
        return false;
    }

    if (cargo.value == "") {
        alert("Insira o seu cargo.");
        return false;
    }

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        alert("Insira um email válido");
        return false;
    }
    
    return true;
}