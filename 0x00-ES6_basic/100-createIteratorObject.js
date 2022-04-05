export default function createIteratorObject(report) {
  const values = Object.values(report.allEmployees).reduce((vals, curr) => {
    vals.push(...curr);
    return vals;
  }, []);

  let currIndex = 0;
  const maxIndex = values.length;

  return {
    next() {
      if (currIndex < maxIndex) {
        const res = { value: values[currIndex], done: false };
        currIndex += 1;
        return res;
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]: () => this.next(),
  };
}
