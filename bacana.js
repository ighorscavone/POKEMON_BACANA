function callApi() {

    var pokemon = document.getElementById("digite").value;
    var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
    var divAtual = document.getElementById("pk");
    var imagem = document.getElementById("foto");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");

    fetch(url) // Call the fetch function passing the url of the API as a parameter
        .then(response => response.json())
        //.then(data => document.getElementById('codeBox').innerHTML = data)
        .then(data => {p1.innerHTML ="Nome: " + data.name
        p2.innerHTML = "Habilidade: " + data.abilities[0].ability.name
        divAtual.innerHTML = "";
        divAtual.appendChild(p1);
        imagem.setAttribute("src",data.sprites.front_default);
        divAtual.appendChild(p2);
    })
        
        .catch(function(error) {
            // This is where you run code if the server returns any errors
            console.log(error);
        });

}