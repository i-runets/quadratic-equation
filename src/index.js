module.exports = function solveEquation(equation) {
  // your implementation
  var a, b, c, x1, x2, d;
  var result = [];
  var elements = equation.split(' ');
  a = Number(elements[0]);
  b = Number(elements.slice(3, 5).join(''));
  c = Number(elements.slice(7, 9).join(''));
  d = Math.pow(b, 2) - 4 * (a) * (c);
  x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  if (x1 < x2) {
    result[0] = x1;
    result[1] = x2;
  }
  else {
    result[0] = x2;
    result[1] = x1;
  }
  return result;
}
