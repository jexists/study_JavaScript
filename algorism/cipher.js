const rot13 = (str) => {
  let solved = '';
  for (var i = 0; i < str.length; i++) {
    // console.log(str[i]);
    // charCode()
    // ASCII
    let asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      solved += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      solved += str[i];
    }
  }
  return solved;
}

// [a, b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z];

rot13('A');
// A.charCodeAt(); //65
// Z.charCodeAt(); //90

console.log(rot13('B')); //O
console.log(rot13('C')); //P
console.log(rot13('S')); //F
console.log(rot13('SERR PBQR PNZC')); //FREE CODE CAMP