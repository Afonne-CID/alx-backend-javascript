export default function iterateThroughObject(reportWithIterator) {
  let val = reportWithIterator.next();
  let res = '';

  while (!val.done) {
    res += `${val.value} | `;
    val = reportWithIterator.next();
  }
  return res.slice(0, res.length - 3);
}
