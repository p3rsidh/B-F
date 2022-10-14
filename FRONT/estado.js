
const table = document.getElementById("estados")
const botaoMostrar = document.getElementById("mostrar")


function mostrar(){
fetch("http://localhost:8080/estados").then((data)=>{
    return data.json();
  }).then((todosUsuarios) =>{
      let data1 = "";
      todosUsuarios.map((values) =>{
          data1 += `
          <thead>
              <tr>
                  <td scope="col">${values.codigo} </td>
                  <td scope="col">${values.nomeEstado}</td> 
                  
              </tr>
          </thead>
          `
      })
     
      console.log( document.getElementById("estados").replaceWith(data1));
    }).catch(e => console.log("Deu erro: " + e))

}

botaoMostrar.onclick = mostrar();

