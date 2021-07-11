class Flight {
  constructor(flightNumber, airplane) {
    this.airplane = airplane;
    this.flightNumber = flightNumber;

    this.seatingPlan = airplane.seatingPlan();
    this.seats = [];
    this.seats.length = this.seatingPlan[0] + 1;
    this.seats.fill(undefined, 1, this.seatingPlan[0] + 1);
    this.seats = this.seats.map(e => {
      const seat = {};
      this.seatingPlan[1].forEach(e => (seat[e] = undefined));
      return seat;
    });
  }

  get airline() {
    return this.flightNumber.slice(0, 2);
  }

  get number() {
    return this.flightNumber.slice(2);
  }

  get airplaneModel() {
    return this.airplane.model;
  }

  _parseSeat(seat) {
    const letter = seat.slice(-1);

    const seatLetters = this.seatingPlan[1];
    const letterInSeatLetters = seatLetters.includes(letter);
    if (!letterInSeatLetters) {
      throw `Invalid seat letter: ${letter}`;
    }

    const row = seat.slice(0, -1);
    if (isNaN(parseInt(row, 10))) {
      throw `Invalid seat row: ${row}`;
    }

    const rowNumbers = this.seatingPlan[0];
    if (parseInt(row, 10) < 0 || parseInt(row, 10) > rowNumbers) {
      throw `Invalid row number: ${row}`;
    }

    return [parseInt(row, 10), letter];
  }

  allocateSeat(seat = "12C", passenger = "Pawel Konior") {
    const parsedSeat = this._parseSeat(seat);

    if (this.seats[parsedSeat[0]][parsedSeat[1]] !== undefined) {
      throw `Seat ${seat} is already occupied`;
    }

    this.seats[parsedSeat[0]][parsedSeat[1]] = passenger;
  }

  relocateSeat(fromSeat, toSeat) {
    const parsedFromSeat = this._parseSeat(fromSeat);
    const parsedToSeat = this._parseSeat(toSeat);

    if (this.seats[parsedFromSeat[0]][parsedFromSeat[1]] === undefined) {
      throw `There is no passenger to relocate`;
    }

    if (this.seats[parsedToSeat[0]][parsedToSeat[1]] !== undefined) {
      throw `Destination seat ${seat} is already occupied`;
    }

    this.seats[parsedToSeat[0]][parsedToSeat[1]] = this.seats[
      parsedFromSeat[0]
    ][parsedFromSeat[1]];
    this.seats[parsedFromSeat[0]][parsedFromSeat[1]] = undefined;
  }

  numAvailableSeats() {
    return this.seats.reduce((acc, current) => {
      return (acc += Object.values(current).filter(val => val === undefined)
        .length);
    }, 0);
  }

  makeBoardingCards(cardPrinter) {
    for (let passenger of this._passengerSeats()) {
      cardPrinter(passenger[0], passenger[1]);
    }
  }

  *_passengerSeats() {
    const seatLetters = this.seatingPlan[1];
    const rowNumbers = this.seatingPlan[0];

    for (let i = 1; i < rowNumbers; i++) {
      for (let letter of seatLetters) {
        const passenger = this.seats[i][letter];
        if (passenger !== undefined) {
          yield [passenger, [i, letter].join("")];
        }
      }
    }
  }
}

export default Flight;
