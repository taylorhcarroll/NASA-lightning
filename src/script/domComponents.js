//HTML builder//
function createPicHTML(picObj) {
    let picHTML = `
        <section>
        <h3> Name: ${picObj.title}</h3>
        <img class="imgNASA" alt="Image of the Day" src="${picObj.url}"</img>
        <p>Explanation: ${picObj.explanation}</p>
        <p>Date: ${picObj.date}</p>
        <p>Copyright: ${picObj.copyright}</p>
        <p>Ethnicity: ${picObj.title}</p>
        </section>
        `

return picHTML;
}