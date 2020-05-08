const reverseString = (value) => value.split("").reverse().join("");

export default (value) => {
  const valor = reverseString(value.replace(/[^\d]+/gi, ""));
  const mascara = reverseString("###.###.###.###,##");
  let resultado = "";
  for (let x = 0, y = 0; x < mascara.length && y < valor.length; ) {
    if (mascara.charAt(x) !== "#") {
      resultado += mascara.charAt(x);
      x += 1;
    } else {
      resultado += valor.charAt(y);
      y += 1;
      x += 1;
    }
  }
  return `R$ ${reverseString(resultado)}`;
};
