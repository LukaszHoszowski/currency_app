import Flight from "./Flight.mjs";
import AirbusA390 from "./AirbusA390.mjs";
import Boeing777 from "./Boeing777.mjs";
import { cardPrinter } from "./helpers/helpers.mjs";

const airbus = new AirbusA390();
const boeing = new Boeing777();
const flight = new Flight("MX666", boeing);

console.log(airbus.countSeats());
console.log(boeing.countSeats());
console.log(flight.airline);
console.log(flight.number);
console.log(flight.airplaneModel);
flight.allocateSeat();
flight.allocateSeat("12D", "Janusz");
flight.allocateSeat("12A", "Lech");
flight.allocateSeat("12E", "Jarosław");
flight.relocateSeat("12C", "56K");
// flight.allocateSeat();
console.log(flight.numAvailableSeats());
flight.makeBoardingCards(cardPrinter);
console.log(flight.seats);
