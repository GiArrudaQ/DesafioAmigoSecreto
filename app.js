let amigo = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo.trim() !== "") {
        amigo.push(nomeAmigo);  
        atualizarListaAmigos();  
        document.getElementById("amigo").value = "";  
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  

    amigo.forEach(function(nomeAmigo) {  
        const li = document.createElement("li");
        li.textContent = nomeAmigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigo.length); 
    const resultado = document.getElementById("resultado");

    const li = document.createElement("li");
    li.textContent = amigo[indiceSorteado]; 
    resultado.innerHTML = ''; 
    resultado.appendChild(li);
}