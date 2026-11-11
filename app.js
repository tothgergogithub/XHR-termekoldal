
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

        const ertekelesekSzama = 127;
        const garancia = "2 év";
        const szallitas = "1-3 munkanap";
        const extraJellemzok = ["15,6\" Full HD kijelző", "Windows 11"];
        const kiemeltJellemzok = [
            "Kiemelkedő teljesítmény",
            "Tökéletes játékélmény",
            "Lenyűgöző kijelző",
            "Fejlesztéshez ideális"
        ];
        const velemenyDatumok = ["2024. 11. 03.", "2024. 10. 21."];

        document.getElementById("termekkep").src = product.image;
        document.getElementById("kistermekkep1").src = product.image;
        document.getElementById("kistermekkep2").src = product.image;
        document.getElementById("kistermekkep3").src = product.image;
        document.getElementById("kistermekkep4").src = product.image;
        document.getElementById("termeknev").textContent = product.name;
        document.getElementById("rovid-leiras").textContent = product.description;
        document.getElementById("leiras").textContent = "A Gaming Laptop Pro X15 a legújabb generációs hardverrel készült, hogy minden játékot és fejlesztői feladatot kompromisszumok nélkül futtasson. Erőteljes processzor, nagy memória és villámgyors SSD gondoskodik a zökkenőmentes élményről, miközben a prémium kijelző élethű látványt biztosít."
        document.getElementById("ertekeles").textContent = product.rating;
        document.getElementById("velemenyek-szama").textContent = "(" + ertekelesekSzama + " értékelés)";
        document.getElementById("tab-velemeny-szama").textContent = ertekelesekSzama;
        document.getElementById("ar").textContent = product.price.toLocaleString("hu-HU") + " " + product.currency;
        document.getElementById("keszlet").textContent = "●  Raktáron (" + product.stock + " db)";
        document.getElementById("gyarto").textContent = product.manufacturer.name;
        document.getElementById("orszag").textContent = product.manufacturer.country;
        document.getElementById("garancia").textContent = garancia;
        document.getElementById("szallitas").textContent = szallitas;
        document.getElementById("gyarto-keszlet").textContent = product.stock + " db";
        document.getElementById("jellemzo1").textContent = kiemeltJellemzok[0];
        document.getElementById("jellemzo2").textContent = kiemeltJellemzok[1];
        document.getElementById("jellemzo3").textContent = kiemeltJellemzok[2];
        document.getElementById("jellemzo4").textContent = kiemeltJellemzok[3];
        document.getElementById("lista-jellemzo1").textContent = product.features[0];
        document.getElementById("lista-jellemzo2").textContent = product.features[1];
        document.getElementById("lista-jellemzo3").textContent = product.features[2];
        document.getElementById("lista-jellemzo4").textContent = product.features[3];
        document.getElementById("lista-jellemzo5").textContent = extraJellemzok[0];
        document.getElementById("lista-jellemzo6").textContent = extraJellemzok[1];
        document.getElementById("velemeny-kezdobetuje1").textContent = product.reviews[0].user.charAt(0);
        document.getElementById("velemeny-nev1").textContent = product.reviews[0].user;
        document.getElementById("velemeny-datum1").textContent = velemenyDatumok[0];
        document.getElementById("velemeny-szoveg1").textContent = "Nagyon gyors gép! Minden elvárásomat felülmúlta.";
        document.getElementById("velemeny-kezdobetuje2").textContent = product.reviews[1].user.charAt(0);
        document.getElementById("velemeny-nev2").textContent = product.reviews[1].user;
        document.getElementById("velemeny-datum2").textContent = velemenyDatumok[1];
        document.getElementById("velemeny-szoveg2").textContent = "Minden játék maximális beállításokkal fut. Kiváló ár-érték arány!";
    };

    http.onerror = function () {
        document.getElementById("hiba").textContent = "Nem sikerült betölteni a termek.json fájlt.";
        document.getElementById("hiba").hidden = false;
    };

    http.open("GET", "termek.json");
    http.send();
};

