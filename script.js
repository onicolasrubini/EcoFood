function buscarReceita() {
    const ing = document.getElementById("ingrediente").value.toLowerCase();
    const res = document.getElementById("resultado");

    const receitas = {
        "banana": "Panqueca de banana com aveia ou chips de casca.",
        "arroz": "Bolinho de arroz crocante ou arroz de forno.",
        "pão": "Rabanada salgada ou farinha de pão temperada.",
        "batata": "Nhoque, sopa cremosa ou cascas assadas crocantes."
    };

    if (receitas[ing]) {
        res.innerHTML = `<h3>Receita encontrada:</h3><p>${receitas[ing]}</p>`;
    } else {
        res.innerHTML = `<p>Nenhuma receita encontrada para este ingrediente.</p>`;
    }
}
