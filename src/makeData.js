import namor from 'namor';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    // id: Math.floor(Math.random() * 100),
    firstName: namor.generate({ words: 4, numbers: 0 }),
    lastName: namor.generate({ words: 4, numbers: 10 }),
    age: Math.floor(Math.random() * 9999),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
