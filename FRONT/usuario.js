const formE = document.getElementById("estado-form")

formE.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form); // Pega o formulário e java em uma variável 
    const data = Object.fromEntries(formData); // Se torna em objeto 

    fetch("http://localhost:8080/estados", {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
});

//table - trazer usuários cadastrados na tela
fetch("http://localhost:8080/estados").then((data)=>{
  return data.json();
}).then((todosUsuarios) =>{
    let data1 = "";
    todosUsuarios.map((values) =>{
        data1 += `
        <tbody>
            <tr>
                <th scope="row">${values.id} </td>
                <td>${values.nomeEstado}</td> 
                
            </tr>
        </tbody>
        `
    })
    document.getElementById("usuarioDados").innerHTML = data1;
    console.log(todosUsuarios);
})
