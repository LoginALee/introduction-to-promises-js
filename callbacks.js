//Example 1️⃣ without callbacks
const gymRoutine = [];

const addExercise = (exerciseName) => {
  gymRoutine.push(exerciseName);
};

addExercise('Dead lift');
console.log(gymRoutine);

// Exercise 2️⃣ with callbacks
const gymRoutine2 = [];

const addExercise2 = (exerciseName, callback) => {
  setTimeout(() => {
    gymRoutine2.push(exerciseName);
    callback();
  }, 1000);
};

addExercise2('Dead lift', () => console.log(gymRoutine2));

//CALLBACK HELL 🔥
const gymRoutine3 = [];

const addExercise3 = (exerciseName, callback) => {
  setTimeout(() => {
    gymRoutine3.push(exerciseName);
    callback();
  }, 1000);
};

addExercise3('Dead lift', () => {
  console.log(gymRoutine3);

  addExercise3('Squat', () => {
    console.log(gymRoutine3);

    addExercise3('Bench press', () => {
      console.log(gymRoutine3);
    });
  });
});
