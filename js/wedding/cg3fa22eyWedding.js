function calculate() {
  let y = prompt("Please enter the number of guests", "");
  let x = prompt("Please enter the number of tables", "");
  var quotient = Math.floor(y/x);
  var remainder = y % x;
  if (remainder === 0){
    alert("There will be " + x + " tables of " + quotient + ".");
  } else if (remainder > 0){
    alert("There will be " + x + " tables of " + quotient + " and 1 table of " + remainder + ".");
  }
};