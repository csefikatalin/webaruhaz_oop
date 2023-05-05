class Termek {
  #divElem;
  #adat;
  #kedvencButtonElem;
  #torolButtonElem;
  constructor(ARTICLE, OBJ) {
    this.#adat = OBJ;
    let txt = `
      <div class="card col-lg-3 col-md-4 col-sm-6">
        <h2 class="card-header">Termék ${this.#adat.id} </h2>
        <p class="card-body"> ${this.#adat.termek} </p>
        <p class="card-body"> ${this.#adat.ar} </p>
        <p class="card-body"> ${this.#adat.szin} </p>
        <div class="card-footer btn-group">
          <button class="kedvenc">Kedvencekhez</button>
          <button class="torol">Töröl</button>
        </div>
      </div>
      `;
    ARTICLE.append(txt);

    this.#divElem = ARTICLE.children("div:last-child");
    this.#kedvencButtonElem = this.#divElem
      .children(".card-footer")
      .children(".kedvenc");
    this.#torolButtonElem = this.#divElem
      .children(".card-footer")
      .children(".torol");

    this.#torolButtonElem.on("click", () => {
      console.log(this.#adat.id);
      this.esemenyTrigger("torol");
    });
    this.#kedvencButtonElem.on("click", () => {
      
      this.esemenyTrigger("kedvencekhez");
    });
  }

  esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, {
      detail: this.#adat.id,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Termek;
