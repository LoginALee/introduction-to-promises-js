# introduction-to-promises-js

## Introduction
Asynchronous code is such a key concept in web development, and is one of those concepts that programmers keep returning to remember how exactly it worked, how the code will behave in certain situations, and the limitations of it, so here i will do my best to explain how Promises helps us to handle asynchronous actions in a clear and easy way.

When it comes to talk about Promises in Javascript, a good first approach is to talk about callbacks, then Promises, and at the end the so popular async/await combo, so let’s get to it shall we? 

### Callbacks
A callback is a function that is called inside another function, which takes the first function as a parameter

Speaking in more simple terms, we could say that a callback is a function that is called when something happens, and that ‘something’ can be an event (like a mouse click, an API call, etc)


// CODE_HERE



### Promises
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).

A promise may be in one of 3 possible states:
fulfilled   ✅
rejected  ❌
pending ⌛️

Promise users can attach callbacks to handle
the fulfilled value or the reason for rejection.


// CODE_HERE


### Async / await
JavaScript offers us two keywords:  async and await, to make the usage of promises dramatically easy. The async and await keywords contribute to enhancing the JavaScript language syntax instead of introducing a new programming concept.


We use async to return a promise, 
And  await to wait and handle a promise.

//CODE_HERE


### Conclusion
There is a lot more to asynchronous programming in Javascript than what we talked about here, however i hope this friendly introduction encourages you to dig deep, play with more examples, try to implement it in your personal projects, and go check the official documentation

Also, asynchronous Javascript may be a little overwhelming at first, so just practice, practice and then practice again, don’t try to be an expert overnight, keep a steady but continuous learning path



### Docs
https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
