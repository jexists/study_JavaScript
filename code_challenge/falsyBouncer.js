
// falsy = false, null, 0, "", undefined, NaN
const bouncer = (arr) => {
  let truthies = [];

  for (var elem of arr) {
    // console.log(elem);
    if (elem) truthies.push(elem);
  }
  return truthies;
}

console.log(bouncer([7, 'ate', false, '', 9]));

if ('k') {
  console.log('string');
}
if (true) {
  console.log('true');
}

if (false) { console.log('false'); }
if (null) { console.log('null'); }
if (0) { console.log('0'); }
if ("") { console.log(''); }
if (undefined) { console.log('undefined'); }
if (NaN) { console.log('NaN'); }