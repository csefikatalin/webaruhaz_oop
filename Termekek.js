import Termek from "./Termek.js";

import Aszinkron from "./Aszinkron.js";

class Termekek {
  #kedvencek = [];
  #vegpont
  constructor() {
    console.log("termékek")
    /**itt történik meg az adatok beolvasása */
    const aszinkron = new Aszinkron();
    this.#vegpont = "http://localhost:3000/LISTA";
    aszinkron.adatBeolvas(this.#vegpont,this.#termekMegjelenito);

    $(window).on("kedvencekhez", (event) => {
      KEDVENCLISTA.push(event.detail);
      console.log(KEDVENCLISTA);
    });
    $(window).on("torol", (event) => {
    
      console.log(event.detail);
      //itt kell meghívni az Asszinkron osztály töröl metódusát
      aszinkron.adatTorles(this.#vegpont,event.detail)
    });
  }

  #termekMegjelenito(lista) {
   console.log("termekek")
    let sajtalista=lista
    //a lista -t a JSON fájlból kapjuk
    //megjeleníti a Termek-ből példányosított objketumokat
    const ARTICLE = $("article");
    for (let i = 0; i < sajtalista.length; i++) {
      const TERMEK = new Termek(ARTICLE, sajtalista[i], i);
    }
  }
}
export default Termekek;
