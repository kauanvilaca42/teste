function pegaValor(DOMElement){
    var valor1 = parseFloat(document.getElementById("teste").value);
    
    if (valor1 < 0 || valor1 > 100) {
        document.getElementById("resultado").innerHTML = "Valor inválido";
    }
    else{
        document.getElementById("resultado").innerHTML = "Valor válido";
    }
}
function analise(DOMElement){
    var btnTeste = document.getElementById("btnTeste");
    btnTeste.onclick = pegaValor;
}

analise();