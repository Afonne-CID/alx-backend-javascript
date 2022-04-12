export default function cleanSet(set, startString) {
  let res = '';
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return res;
  }
  for (const el of set.values()) {
    if (el && typeof el === 'string' && el.startsWith(startString)) {
      res += `${el.slice(startString.length)}-`;
    }
  }
  return res.slice(0, res.length - 1);
}
