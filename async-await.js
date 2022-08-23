// async-await structure
const apiCall = async () => {
  try {
    const result = await someAsyncAction();
  } catch (error) {
    throw new Error(error);
  }
};

// Example 1️⃣
// Timer con async-await

const timer = (milliseconds) => {
  return new Promise((resolve, reject) => {
    if (typeof milliseconds !== 'number') reject('Need to pass a number');
    setTimeout(
      () => resolve(`TIME! - ${milliseconds} milliseconds passed`),
      milliseconds
    );
  });
};

const execute = async () => {
  try {
    const timerMessage = await timer(2000);
    console.log(timerMessage);
  } catch (error) {
    console.log(error);
  }
};

execute();

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

const asyncActionTwo = async () => {
  try {
    await addExercise('Dead lift');
    await addExercise('Squat');
    await addExercise('Bench press');
    console.log(`Your routine is: ${gymRoutine.toString()}`);
  } catch (error) {
    throw new Error(error);
  }
};

asyncActionTwo();
