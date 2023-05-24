const a = 'a';
const b = 'b';
const c = 'c';
const d = 'd';
const e = 'e';

function inputMustBeTrue(a, b, c, d, e) {
  const count =
    Number(!!a) + Number(!!b) + Number(!!c) + Number(!!d) + Number(!!e);
  if (count > 1) {
    return new Error('Only one of a,b,c,d,e can be true');
  }
}
