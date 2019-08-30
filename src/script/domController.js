//looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
const documentContainer = document.querySelector(".mainContainer")
console.log(documentContainer);

//passes what it is given to the DOM
function addPicsToDom(htmlString) {
const documentContainer = document.querySelector(".mainContainer")
documentContainer.innerHTML += htmlString; 
}