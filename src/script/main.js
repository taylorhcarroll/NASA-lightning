//instructions
// 1. Using this url, fetch data related to NASA’s picture of the day.
// 2. Display the returned object in the console.
// 3. Write a template function that will return a DOM component with the image, date, explanation, title, and copyright. Remember to use semantic HTML.
// 4. Write a function that will display the component on the DOM.

console.log("If you can see this the JS file is hooked up")

// //looks for the first HTML element that has a class of mainContainer and stores it as a variable, this links to DOM
// const documentContainer = document.querySelector(".mainContainer")
// console.log(documentContainer);

// //passes what it is given to the DOM
// function addPicsToDom(htmlString) {
// const documentContainer = document.querySelector(".mainContainer")
// documentContainer.innerHTML += htmlString; 
// }

// //HTML builder//
// function createPicHTML(picObj) {
//     let picHTML = `
//         <section>
//         <h3> Name: ${picObj.title}</h3>
//         <img class="imgNASA" alt="Image of the Day" src="${picObj.url}"</img>
//         <p>Explanation: ${picObj.explanation}</p>
//         <p>Date: ${picObj.date}</p>
//         <p>Copyright: ${picObj.copyright}</p>
//         <p>Ethnicity: ${picObj.title}</p>
//         </section>
//         `

// return picHTML;
// }


// //fetch request to NASA and display to console//
// fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
//     .then(response => response.json())
//     .then(parsedResponse => {
//         //console.table makes the information look way better//
//         console.table(parsedResponse)
//             const responseAsHTML = createPicHTML(parsedResponse)
//             addPicsToDom(responseAsHTML);
            
//         })


            