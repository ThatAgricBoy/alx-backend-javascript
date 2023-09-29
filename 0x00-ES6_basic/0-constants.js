// 0-constants.js
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Use const to declare task
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Use let to declare combination
  combination += getLast();

  return combination;
}
