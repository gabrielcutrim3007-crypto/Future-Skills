// ===============================
// Adicionar habilidade ao vetor
// ===============================
let habilidades = [];
 
function adicionarHabilidade() {
    const input = document.getElementById('habilidadeInput').value.trim();
    const select = document.getElementById('habilidadeSelect').value.trim();
 
    // Usa o valor do input se preenchido, senão usa o select
    const valor = input !== "" ? input : select;
 
    if(valor === "") {
        alert("Selecione ou digite uma habilidade antes de adicionar.");
        return;
    }
 
    if(habilidades.includes(valor)) {
        alert("Esta habilidade já foi adicionada!");
        return;
    }
 
    habilidades.push(valor);
    atualizarListaHabilidades();
 
    // Limpa input e select
    document.getElementById('habilidadeInput').value = "";
    document.getElementById('habilidadeSelect').selectedIndex = 0;
}
 
function atualizarListaHabilidades() {
    const listaDiv = document.getElementById('habilidadesLista');
    listaDiv.innerHTML = "";
 
    habilidades.forEach((hab, index) => {
        const item = document.createElement('div');
        item.textContent = `${index + 1}. ${hab}`;
        listaDiv.appendChild(item);
    });
}
 
let interesses = [];
 
function adicionarInteresse() {
    const input = document.getElementById('interesseInput').value.trim();
    const select = document.getElementById('interesseSelect').value.trim();
 
    // Prioriza o input, se preenchido
    const valor = input !== "" ? input : select;
 
    if(valor === "") {
        alert("Selecione ou digite um interesse antes de adicionar.");
        return;
    }
 
    if(interesses.includes(valor)) {
        alert("Este interesse já foi adicionado!");
        return;
    }
 
    interesses.push(valor);
    atualizarListaInteresses();
 
    // Limpa input e select
    document.getElementById('interesseInput').value = "";
    document.getElementById('interesseSelect').selectedIndex = 0;
}
 
function atualizarListaInteresses() {
    const listaDiv = document.getElementById('interessesLista');
    listaDiv.innerHTML = "";
 
    interesses.forEach((int, index) => {
        const item = document.createElement('div');
        item.textContent = `${index + 1}. ${int}`;
        listaDiv.appendChild(item);
    });
}
 
// ===============================
// Função: checar e-mail
// ===============================
function checarEmail(email) {
    email = email.trim().toLowerCase();
 
    if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".br"))) {
        return false;
    }
    return true;
}
 
// ===============================
// Função: checar CPF
// ===============================
function checarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
 
    if (cpf.length !== 11) return false;
    return true;
}
 
// Exibir feedback
// ===============================
function exibirFeedback(listaErros) {
    let area = document.getElementById("feedback");
 
    if (listaErros.length > 0) {
        // Caso haja erros
        let html = "<h3>Erros Encontrados:</h3><ul>";
 
        listaErros.forEach(erro => {
            html += `<li>${erro}</li>`;
        });
 
        html += "</ul>";
 
        area.style.background = "#ffd4d4";
        area.style.border = "2px solid #ff4d4d";
        area.style.color = "#b30000";
        area.innerHTML = html;
    } else {
        // Caso sucesso
        area.style.background = "#d6ffe0";
        area.style.border = "2px solid #00a03e";
        area.style.color = "#006622";
 
        area.innerHTML = `
            <h3>Inscrição Realizada com Sucesso!</h3>
            <p><strong>Nome:</strong> ${document.getElementById("nome").value}</p>
            <p><strong>Email:</strong> ${document.getElementById("email").value}</p>
            <p><strong>Interesses:</strong> ${interesses.join(", ")}</p>
            <p><strong>Habilidades:</strong> ${habilidades.join(", ")}</p>
        `;
    }
}
 
// ===============================
// Função principal de validação
// ===============================
function validarFormulario() {
    let erros = [];
 
    let nome = document.getElementById("nome").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let email = document.getElementById("email").value.trim();
 
    if (nome.length < 5) {
        erros.push("O nome deve conter pelo menos 5 caracteres.");
    }
 
    if (!checarCPF(cpf)) {
        erros.push("CPF inválido. Deve ter 11 números.");
    }
 
    if (!checarEmail(email)) {
        erros.push("E-mail inválido.");
    }
 
    if (interesses.length === 0) {
        erros.push("Adicione pelo menos 1 interesse.");
    }
 
    if (habilidades.length < 3) {
        erros.push("Adicione pelo menos 3 habilidades.");
    }
 
    exibirFeedback(erros);
}