//copyObject.js
/*
copy the object and the array of the keys you want to copyObject
1. use Object.create to copy the Object properties
2. use for/in to get the

*/

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.map(function(key) {
      destinationObject[key] = sourceObject[key]
    });

    return destinationObject;
  } else {
      return Object.assign(destinationObject, sourceObject);
  }
}

let keysObj = Object.keys(objToCopy)
console.log(copyObj(objToCopy, keysObj));
