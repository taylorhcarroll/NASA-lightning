//fetch request to NASA and display to console//
//can put whichDay
function getPicture() {

fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(response => response.json())
    .then(parsedResponse => {
        //console.table makes the information look way better//
        console.table(parsedResponse)
            const responseAsHTML = createPicHTML(parsedResponse)
            addPicsToDom(responseAsHTML);
            
        }) }


// function getPicture(whichDay) {
// fetch(`"https://api.nasa.gov/planetary/${whichDay}apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx"`)
// .then(response => response.json())
// .then(parsedResponse => {
//     //console.table makes the information look way better//
//     console.table(parsedResponse)
//         const responseAsHTML = createPicHTML(parsedResponse)
//         addPicsToDom(responseAsHTML);
        
//     }) }