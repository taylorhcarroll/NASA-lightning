//get today's picture
document.querySelector("#getPicture").addEventListener("click", getPicture);

//get yesterday's picture
document.querySelector("#getYesterdayPict").addEventListener("click", (event) => {
    getPicture("DATE")
})

//get day before yest pic

