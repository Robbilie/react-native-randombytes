const ExpoRandom = require("expo-random");

export function randomBytes (length, cb) {
  if (!cb) {
    return Buffer.concat(
      new Array(Math.ceil(length / 1024))
        .fill(undefined)
        .map((e, i) => ExpoRandom.getRandomBytes(Math.min(1024, length - (i * 1024))))
    );
  }
  return Promise.all(
    new Array(Math.ceil(length / 1024))
      .fill(undefined)
      .map((e, i) => ExpoRandom.getRandomBytesAsync(Math.min(1024, length - (i * 1024))))
  ).then(list => Buffer.concat(list))
    .then(res => cb(null, res))
    .catch(e => cb(e));
}

