// Promise structure 1️⃣

const apiCall = new Promise((resolve, reject) => {
  // some call to an API
  if ('everything goes OK') resolve(apiResponse);
  else if ('error happends') reject(reason);
});

// Example 1️⃣
// timer with promises

const timer = (milliseconds) => {
  return new Promise((resolve, reject) => {
    if (typeof milliseconds !== 'number') reject('Need to pass a number');
    setTimeout(
      () => resolve(`TIME! - ${milliseconds} milliseconds passed`),
      milliseconds
    );
  });
};

timer(2000).then((res) => console.log(res));

// Example 2️⃣
const gymRoutine = [];

const addExercise = (exercise) => {
  return new Promise((resolve, reject) => {
    if (typeof exercise !== 'string') reject('Invalid type');
    setTimeout(() => {
      gymRoutine.push(exercise);
      resolve(`Exercise: ${exercise} Added`);
    }, 1000);
  });
};

addExercise('Deadlift')
  .then((res) => console.log(res))
  .then(() => addExercise('Squat'))
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log(`Your routine is: ${gymRoutine}`));
