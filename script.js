// document.querySelector("h1").style.color = "#00C864";

// const tabs = document.querySelectorAll(".tab-btn");
// const contents = document.querySelectorAll(".tab-content");
// tabs.forEach(tab => {

//     tab.addEventListener("click", () => {
//         tabs.forEach(btn => btn.classList.remove("active"));
//         contents.forEach(content => content.classList.remove("active"));
//         tab.classList.add("active");
//         const panel = document.getElementById(tab.dataset.tab);
//         if (panel) {
//             panel.classList.add("active");
//         }

//     });

// });


const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote");

function getQuote() {


    quoteText.textContent = "Loading...";

    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = `"${data.quote}"`;
            console.log(data);
        })
        .catch(error => {
            quoteText.textContent = "Failed to load quote.";
            console.log(error);
        });
}


getQuote();


newQuoteBtn.addEventListener("click", getQuote);
