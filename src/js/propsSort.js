export default function orderByProps(obj, features) {
  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Object.keys(obj).length; i++) {
    for (const props in obj) {
      if (obj[features[i]] === obj[props]) {
        result.push({ key: features[i], value: obj[features[i]] });
        // eslint-disable-next-line no-param-reassign
        delete obj[features[i]];
      }
    }
  }

  const array = Object.keys(obj);
  array.sort();

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    result.push({ key: array[i], value: obj[array[i]] });
  }

  return result;
}
