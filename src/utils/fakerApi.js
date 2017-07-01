import faker from 'faker';

const DELAY = 2000;
const MIN_PRICE = 20;
const MAX_PRICE = 200;
const ITEMS_NUMBER = 15;

const fakeResults = (searchedName) => {
  const result = [];
  for(let i = 0; i < ITEMS_NUMBER; i++) {
    const obj = {};
    obj.name = searchedName;
    obj.image = faker.image.image();
    obj.price = (Math.random() * (MAX_PRICE - MIN_PRICE) + MIN_PRICE);
    result.push(obj);
  }
  return result;
};

export const fakeCall = (searchedName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (searchedName === "error") {
        return reject("error");
      }
      return resolve(fakeResults(searchedName));
    }, DELAY);
  });
};