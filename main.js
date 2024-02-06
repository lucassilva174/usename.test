/*const meuTitulo = document.querySelector("h1");
meuTitulo.textContent = "Olá Mundo!";*/

/*document.querySelector("html").addEventListener("click", ()=> {
    alert ("Ai! Parece de me cutucar!");
});*/

/*Content = "Parte da Programação Java";
document.querySelector("html").addEventListener("click", function () {
  alert("Ai! Pare de me cutucar!");
});*/

/*const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "image/image-1.png") {
        myImage.setAttribute("src", "image/image-2.png");
    } else {
        myImage.setAttribute("src", "image/image-1.png");
    };
}*/
 
let myButton = document.querySelector("button");
const meuTitulo = document.querySelector("h1");

function setUserName () {
    const myName = prompt("Por favor, digite o seu nome");
    if (!myName) {
        setUserName();
    } else{
        localStorage.setItem("name", myName);
    meuTitulo.textContent = `Mozzila é legal, ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName();
}
