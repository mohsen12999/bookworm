export const getRandomMember = (arr: object[], count: number) => {
  let result = new Array(count);
  if (!arr) {
    return [];
  }
  let len = arr.length;
  let taken = new Array(len);
  if (count > len) {
    return arr;
  }
  while (count--) {
    let rand = Math.floor(Math.random() * len);
    result[count] = arr[rand in taken ? taken[rand] : rand];
    taken[rand] = --len in taken ? taken[len] : len;
  }
  return result;
  // const shuffled = [...array].sort(() => 0.5 - Math.random())
  // let selected = shuffled.slice(0, n);
};
