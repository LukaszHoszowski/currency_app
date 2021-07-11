export const cardPrinter = (passenger, seat, flightNumber, aircaft) => {
  const text = `| Passenger: ${passenger}, Seat: ${seat} |\n`;
  const banner = "+".padEnd(text.length - 2, "-") + "+\n";
  const line = "|".padEnd(text.length - 2, " ") + "|\n";

  const res = [banner, line, line, text, line, line, banner].join("");

  console.log(res);
};
