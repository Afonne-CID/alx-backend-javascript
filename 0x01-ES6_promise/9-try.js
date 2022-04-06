export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.append(result);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
