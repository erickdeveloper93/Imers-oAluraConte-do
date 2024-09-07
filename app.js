function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (!campoPesquisa){
      section.innerHTML = "<p> Nada foi encontrado. Você não buscou por um atleta </p>"  
      return 
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada dado no conjunto de dados
    for (let dado of dados) {
      
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>  
            <a href="#" target="_blank">
            ${dado.titulo}
            </a>
          </h2>  
          <p class="descricao-meta">${dado.descricao} 
          </p>
          <a href=${dado.link} target="_blank">
          Mais informações
          </a>
        </div>
      `;

      }        
  }
  
  if (!resultados) {
      resultados = "<p> Nada foi encontrado </p>"
  }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
// console.log(dados);
