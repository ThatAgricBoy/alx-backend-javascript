# Promises

## What is a Promise?
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It provides a way to handle the result of an asynchronous operation once it's available, whether that result is a value or an error.

## States of a Promise:
A Promise can be in one of three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled (resolved): The asynchronous operation completed successfully, and the Promise holds a resolved value.
Rejected: The asynchronous operation encountered an error, and the Promise holds a reason for the failure.
Creating a Promise:
You can create a Promise using the Promise constructor, which takes a function (often called the executor) with two parameters: resolve and reject. Inside this function, you perform the asynchronous operation, and then you call resolve with the result if it's successful or reject with an error if it fails.