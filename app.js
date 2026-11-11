
window.onload = function () {
    const http = new XMLHttpRequest();

    http.onload = function () {
        if (this.status == 404) {
            document.getElementById("hiba").textContent = "A termék nem található.";
            document.getElementById("hiba").hidden = false;
            return;
        }

        let product;
        try {
            product = JSON.parse(this.responseText);
        } catch (error) {
            document.getElementById("hiba").textContent = "A termékadatok formátuma hibás.";
            document.getElementById("hiba").hidden = false;
            return;
        }
        document.getElementById("termekkep").src = product.image;
        document.getElementById("kistermekkep1").src = product.image;
        document.getElementById("kistermekkep2").src = product.image;
        document.getElementById("kistermekkep3").src = product.image;
        document.getElementById("kistermekkep4").src = product.image;
        document.getElementById("termeknev").textContent = product.name;
        document.getElementById("rovid-leiras").textContent = product.description;
        document.getElementById("leiras").textContent = product.description;
        document.getElementById("ertekeles").textContent = product.rating;
        document.getElementById("velemenyek-szama").textContent = "(" + product.reviews.length + " értékelés)";
        document.getElementById("tab-velemeny-szama").textContent = product.reviews.length;
        document.getElementById("ar").textContent = product.price.toLocaleString("hu-HU") + " " + product.currency;
        document.getElementById("keszlet").textContent = "●  Raktáron (" + product.stock + " db)";
        document.getElementById("gyarto").textContent = product.manufacturer.name;
        document.getElementById("orszag").textContent = product.manufacturer.country;
        document.getElementById("gyarto-keszlet").textContent = product.stock + " db";
        document.getElementById("jellemzo1").textContent = product.features[0];
        document.getElementById("jellemzo2").textContent = product.features[1];
        document.getElementById("jellemzo3").textContent = product.features[2];
        document.getElementById("jellemzo4").textContent = product.features[3];
        document.getElementById("lista-jellemzo1").textContent = product.features[0];
        document.getElementById("lista-jellemzo2").textContent = product.features[1];
        document.getElementById("lista-jellemzo3").textContent = product.features[2];
        document.getElementById("lista-jellemzo4").textContent = product.features[3];
        document.getElementById("velemeny-nev1").textContent = product.reviews[0].user;
        document.getElementById("velemeny-szoveg1").textContent = product.reviews[0].comment;
        document.getElementById("velemeny-nev2").textContent = product.reviews[1].user;
        document.getElementById("velemeny-szoveg2").textContent = product.reviews[1].comment;
    };

    http.onerror = function () {
        document.getElementById("hiba").textContent = "Nem sikerült betölteni a termek.json fájlt.";
        document.getElementById("hiba").hidden = false;
    };

    http.open("GET", "termek.json");
    http.send();
};

