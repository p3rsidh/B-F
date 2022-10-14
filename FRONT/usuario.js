
const formE = document.getElementById('estado-form')
const botao = document.querySelector('#estadoCad')
const botaoMostrar = document.querySelector('#mostrar')
const table = document.querySelector('#usuarioDados')
// const form = document.querySelector("Cliente")



botaoMostrar.addEventListener('click', mostrarTudo())


//mostrar estados
function mostrarTudo(){
    const table1 = table.value;
    console.log(table1);

  //cabeçalho que vai no fecth
   const options = {
    method: 'GET',
    cache: 'default'
   }

    //fetch
   
    fetch("http://localhost:8080/estados", options)
    .then(response => {response.json()
    .then(data => atribuirCampos(data))
    })
    .catch(e => console.log("Deu erro: " + e))
    }


    function atribuirCampos(data)
    {
    const codigo = document.querySelector('#codigo');
    const nomeUsuario = document.querySelector('#nome_estado');

    codigo.value = data.codigo;
    nomeUsuario.value = data.nomeEstado;
    table1.replaceWith(codigo, nomeUsuario);
    }


  //cadastrar usuario
// form.addEventListener('submit', event => { // ouvir até o submit ser acionado
//     event.preventDefault();

//     const formData = new FormData(form); // Pega o formulário e java em uma variável 
//     const data = Object.fromEntries(formData); // Se torna em objeto 

//     fetch("http://localhost:8080/clientes", {
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error));
// });

// function msg() {
//     alert("Salvo com sucesso!");
//     window.location.reload(true);
//   }
