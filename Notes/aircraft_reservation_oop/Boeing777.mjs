import Airplane from "./Airplane.mjs";

class Boeing777 extends Airplane {
  constructor() {
    super();
    this._model = "Boeing777";
  }

  get model() {
    return this._model;
  }

  seatingPlan() {
    return [56, ["A", "B", "C", "D", "E", "G", "H", "J", "K"]];
  }

  countSeats() {
    return super.countSeats(this.seatingPlan());
  }
}

export default Boeing777;
