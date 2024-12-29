function myFunc() {
  console.log(this);
}

myFunc(); // This will log the global object (window in browsers, or undefined in strict mode)

const obj = {
  myFunc: myFunc,
};

obj.myFunc(); //This will correctly log the object obj

const anotherFunc = obj.myFunc;
anotherFunc(); //This will log the global object again, similar to the first call to myFunc()