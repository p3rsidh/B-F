const url = "http://localhost:8080/estados"
const formE = document.getElementById("estado-form")
const botao = document.querySelector('estadoCad')
const botaoMostrar = document.querySelector('mostrar')
const table = document.getElementById('#usuarioDados')


const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

fetch("http://localhost:8080/estados").then((data)=>{
    return data.json();
  }).then((todosUsuarios) =>{
      let data1 = "";
      todosUsuarios.map((values) =>{
          data1 += `
          <tbody>
              <tr>
                  <th scope="row">${values.codigo} </td>
                  <td>${values.nomeEstado}</td> 
              
              </tr>
          </tbody>
          `
      })
      document.getElementById("usuarioDados").innerHTML = data1;
      console.log(todosUsuarios);
  })
//table - trazer usuários cadastrados na tela

// async function mostrar(){
//     const response = await fetch(url);
    
//     const data = response.json(); 
//     console.log(data);

//     data.map((post) => {
//         const div = document.createElement('div');
//         const title = document.createElement('h3');
//         const body = document.createElement('table');
//         const url = document.createElement("a");

//         title.innerText = post.title;
//         body.innerText = post.body;
//         link.innerText = "Ler";
//         link.setAttribute("href" ,`http://localhost:8080/estados`);

//         div.appendChild(title);
//         div.appendChild(body);
//         div.appendChild(link);

//         postsContainer.appendChild(div);
   



// botao.onclick = mostrar();
