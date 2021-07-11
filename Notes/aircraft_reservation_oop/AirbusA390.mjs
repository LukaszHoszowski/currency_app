import Airplane from "./Airplane.mjs";

class AirbusA390 extends Airplane {
  constructor() {
    super();
    this._model = "AirbusA390";
  }

  get model() {
    return this._model;
  }

  seatingPlan() {
    return [23, ["A", "B", "C", "D", "E", "F"]];
  }

  countSeats() {
    return super.countSeats(this.seatingPlan());
  }
}

export default AirbusA390;
