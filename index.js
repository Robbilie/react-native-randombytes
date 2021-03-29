const ExpoRandom = require("expo-random");

export function randomBytes (length, cb) {
  if (!cb) {
    return ExpoRandom.getRandomBytes(length);
  }
  ExpoRandom.getRandomBytesAsync(length).then(res => cb(null, res)).catch(e => cb(e));
}

