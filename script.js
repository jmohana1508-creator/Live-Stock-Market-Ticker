const stocks = {
    TCS: 3421.50,
    INFY: 1845.20,
    RELIANCE: 2910.80
};

function updatePrices() {

    stocks.TCS += (Math.random() - 0.5) * 10;
    stocks.INFY += (Math.random() - 0.5) * 10;
    stocks.RELIANCE += (Math.random() - 0.5) * 10;

    document.getElementById("tcs-price").innerText =
        "₹" + stocks.TCS.toFixed(2);

    document.getElementById("infy-price").innerText =
        "₹" + stocks.INFY.toFixed(2);

    document.getElementById("reliance-price").innerText =
        "₹" + stocks.RELIANCE.toFixed(2);

    document.getElementById("tcs-current-price").innerText =
        "₹" + stocks.TCS.toFixed(2);

    document.getElementById("infy-current-price").innerText =
        "₹" + stocks.INFY.toFixed(2);

    document.getElementById("reliance-current-price").innerText =
        "₹" + stocks.RELIANCE.toFixed(2);

    updatePortfolio();
    function updatePrices() {

    // already irukkura price update code...

    // Current Price update code...

    // percentage code
    let tcsChange = ((stocks.TCS - 3421.50) / 3421.50) * 100;
    let infyChange = ((stocks.INFY - 1845.20) / 1845.20) * 100;
    let relianceChange = ((stocks.RELIANCE - 2910.80) / 2910.80) * 100;

    document.getElementById("tcs-change").innerText =
        (tcsChange >= 0 ? "▲ +" : "▼ ") + tcsChange.toFixed(2) + "%";

    document.getElementById("infy-change").innerText =
        (infyChange >= 0 ? "▲ +" : "▼ ") + infyChange.toFixed(2) + "%";

    document.getElementById("reliance-change").innerText =
        (relianceChange >= 0 ? "▲ +" : "▼ ") + relianceChange.toFixed(2) + "%";

    updatePortfolio();
}
}

setInterval(updatePrices, 2000);


function updatePortfolio() {

    let totalInvestment = 50000;

    let tcsQuantity = Number(
        document.getElementById("tcs-quantity").innerText
    );

    let infyQuantity = Number(
        document.getElementById("infy-quantity").innerText
    );

    let relianceQuantity = Number(
        document.getElementById("reliance-quantity").innerText
    );

    let currentValue =
        stocks.TCS * tcsQuantity +
        stocks.INFY * infyQuantity +
        stocks.RELIANCE * relianceQuantity;

    let profit = currentValue - totalInvestment;

    document.getElementById("total-investment").innerText =
        totalInvestment.toFixed(2);

    document.getElementById("current-value").innerText =
        currentValue.toFixed(2);

    document.getElementById("profit").innerText =
        profit.toFixed(2);

    let profitElement = document.getElementById("profit");

    if (profit >= 0) {
        profitElement.style.color = "green";
    } else {
        profitElement.style.color = "red";
    }
}


const searchBox = document.getElementById("stock-search");
const stockCards = document.querySelectorAll(".stock-card");

searchBox.addEventListener("input", function () {

    let searchText = searchBox.value.toUpperCase();

    stockCards.forEach(function (card) {

        let stockName = card.querySelector("h3").innerText;

        if (stockName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
});


function addStock(stockName) {

    if (stockName === "TCS") {
        let quantity = document.getElementById("tcs-quantity");
        quantity.innerText = Number(quantity.innerText) + 1;
    }

    if (stockName === "INFY") {
        let quantity = document.getElementById("infy-quantity");
        quantity.innerText = Number(quantity.innerText) + 1;
    }

    if (stockName === "RELIANCE") {
        let quantity = document.getElementById("reliance-quantity");
        quantity.innerText = Number(quantity.innerText) + 1;
    }

    alert(stockName + " added to your portfolio!");
}


function buyStock(stockName) {

    if (stockName === "TCS") {
        let quantity = document.getElementById("tcs-quantity");
        quantity.innerText = Number(quantity.innerText) + 1;
        localStorage.setItem("tcsQuantity", quantity.innerText);
    }

    if (stockName === "INFY") {
        let quantity = document.getElementById("infy-quantity");
        quantity.innerText = Number(quantity.innerText) + 1;
        localStorage.setItem("infyQuantity", quantity.innerText);
    }

    if (stockName === "RELIANCE") {
        let quantity = document.getElementById("reliance-quantity");
        quantity.innerText = Number(quantity.innerText) + 1;
        localStorage.setItem("relianceQuantity", quantity.innerText);
    }

    updatePortfolio();

    alert(stockName + " bought!");
}


function sellStock(stockName) {

    let quantity;

    if (stockName === "TCS") {
        quantity = document.getElementById("tcs-quantity");

        if (Number(quantity.innerText) > 0) {
            quantity.innerText = Number(quantity.innerText) - 1;
            localStorage.setItem("tcsQuantity", quantity.innerText);
        }
    }

    if (stockName === "INFY") {
        quantity = document.getElementById("infy-quantity");

        if (Number(quantity.innerText) > 0) {
            quantity.innerText = Number(quantity.innerText) - 1;
            localStorage.setItem("infyQuantity", quantity.innerText);
        }
    }

    if (stockName === "RELIANCE") {
        quantity = document.getElementById("reliance-quantity");

        if (Number(quantity.innerText) > 0) {
            quantity.innerText = Number(quantity.innerText) - 1;
            localStorage.setItem("relianceQuantity", quantity.innerText);
        }
    }

    updatePortfolio();

    alert(stockName + " sold!");
}


// Load saved quantities

let savedTCS = localStorage.getItem("tcsQuantity");
let savedINFY = localStorage.getItem("infyQuantity");
let savedRELIANCE = localStorage.getItem("relianceQuantity");

if (savedTCS !== null) {
    document.getElementById("tcs-quantity").innerText = savedTCS;
}

if (savedINFY !== null) {
    document.getElementById("infy-quantity").innerText = savedINFY;
}

if (savedRELIANCE !== null) {
    document.getElementById("reliance-quantity").innerText = savedRELIANCE;
}

updatePortfolio();
function logout() {
    window.location.href = "login.html";
}