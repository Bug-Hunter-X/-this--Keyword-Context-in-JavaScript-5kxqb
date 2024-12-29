# JavaScript 'this' Keyword Bug

This repository demonstrates a common error related to the `this` keyword in JavaScript.  The example shows how the value of `this` changes depending on the function's invocation context.  The solution illustrates how to use `bind`, `call`, or `apply` to explicitly set the value of `this`.

## Bug Description:
In JavaScript, the `this` keyword refers to the object that owns the currently executing function. However, the value of `this` is not always intuitive, especially when functions are passed as callbacks or used in other contexts.

## Solution:
The solution demonstrates using the `.bind()` method to explicitly set the value of `this` within the function.