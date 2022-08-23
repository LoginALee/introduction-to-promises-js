# introduction-to-promises-js

## Introduction
Asynchronous code is such a key concept in web development, and is one of those concepts that programmers keep returning to remember how exactly it worked, how the code will behave in certain situations, and the limitations of it, so here i will do my best to explain how Promises helps us to handle asynchronous actions in a clear and easy way.

When it comes to talk about Promises in Javascript, a good first approach is to talk about callbacks, then Promises, and at the end the so popular async/await combo, so let’s get to it shall we? 

### Callbacks
A callback is a function that is called inside another function, which takes the first function as a parameter

Speaking in more simple terms, we could say that a callback is a function that is called when something happens, and that ‘something’ can be an event (like a mouse click, an API call, etc)

1️⃣ ***Example without callbacks***

Here, we create an Array which will hold some exercise names, and a function to push elements to it, no callback is beign used yet
```javascript
const gymRoutine = [];

const addExercise = (exerciseName) => {
  gymRoutine.push(exerciseName);
};

addExercise('Dead lift');
console.log(gymRoutine);
```

2️⃣ ***Example with callbacks***

Now, let's implement callbacks in our addExercise function, here we receive a new argument called callback, which is a function that we will be calling inside our addExercise function, in this case, we will be calling it after pushing the exercise name to our array.
```javascript
const gymRoutine2 = [];

const addExercise2 = (exerciseName, callback) => {
  setTimeout(() => {
    gymRoutine2.push(exerciseName);
    callback();
  }, 1000);
};

addExercise2('Dead lift', () => console.log(gymRoutine2));
```

🔥 ***Callback hell***

There is a famous anti-pattern to avoid; it's called the callback hell, eventough callbacks are usefull, if we are not carefull, our code can get messy very quickly, nesting callback inside callback and so on an so forth.

That is where Promises become a much cleaner alternative to handle async Javascript.
```javascript
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
```


### Promises
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).

A promise may be in one of 3 possible states:
- fulfilled   ✅
- rejected  ❌
- pending ⌛️

Promise users can attach callbacks to handle
the fulfilled value or the reason for rejection.


📝 ***Promise structure***
```javascript
const apiCall = new Promise((resolve, reject) => {
  // some call to an API
  if ('everything goes OK') resolve(apiResponse);
  else if ('error happened') reject(reason);
});
```

1️⃣ ***Example with Promises: Timer***

After seeign the basic Promise structure, let's implement it in an example;
Here we are creating a function called timer, which receives milliseconds as parameter.

We are going to create a new Promise instance, with a resolve and reject callback functions,
and now we can call resolve whenever our function works as expected, or reject if we encounter some error
```javascript
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
```

2️⃣ ***Example with Promises***

Let's adapt our addExercise function to use Promises instead of callbacks;
now, instead of receive a callback function as a parameter, we will create a Promise instance
and, if we receive a exercise that is not of type string, we will call the reject callback,
and otherwise, we will call the resolve callback after pushing our exercise name to our Array
```javascript
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
```


### Async / await
JavaScript offers us two keywords:  async and await, to make the usage of promises dramatically easy. The async and await keywords contribute to enhancing the JavaScript language syntax instead of introducing a new programming concept.


We use async to return a promise,
await to wait and handle a promise,
and wrap it inside a try/catch block for error handling.


📝 ***Async/await structure***
```javascript
const apiCall = async () => {
  try {
    const result = await someAsyncAction();
  } catch (error) {
    throw new Error(error);
  }
};
```

1️⃣ ***Example with Async/await: Timer***

To adapt our timer function to use Async/await, the function is the same, but we will need to call it inside an async function,
and use the await keyword before calling it. That way, we can write code as if it were syncronous 
```javascript
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
```

2️⃣ ***Example 2 with Async/await***

Let's adapt our addExercise function as well;
it's the same case as before, the core function stays the same, but now we will call it inside an async function
and use the await keyword to wait for our addExercise function finished his async work
```javascript
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
```


### Conclusion
There is a lot more to asynchronous programming in Javascript than what we talked about here, however i hope this friendly introduction encourages you to dig deep, play with more examples, try to implement it in your personal projects, and go check the official documentation

Also, asynchronous Javascript may be a little overwhelming at first, so just practice, practice and then practice again, don’t try to be an expert overnight, keep a steady but continuous learning path



### Docs
- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
