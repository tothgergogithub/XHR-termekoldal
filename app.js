
const http = new XMLHttpRequest();

http.onload = function () {
    const product = JSON.parse(this.responseText);

    document.getElementById("termekkep").src = product.image;
    document.getElementById("termeknev").textContent = product.name;
    document.getElementById("termekkep2").src=product.image;
};

http.open("GET", "termek.json");
http.send();

