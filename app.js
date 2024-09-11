function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa")
  
let campoPesquisa = document.getElementById("campo-pesquisa").value

if (campoPesquisa == "") {
  section.innerHTML = "nada encontrado"
   return
}

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = ""
  let titulo = ""
  let descricao = ""

  // Itera sobre cada dado na lista de resultados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `<div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</div>
        </p>
      </div>`
    }
  }
  // Atribui o HTML completo da lista de resultados à seção
  section.innerHTML = resultados
}
