function myFunc() {
  console.log(this);
}

const obj = {
  myFunc: myFunc,
};

const boundFunc = obj.myFunc.bind(obj);

boundFunc(); //This will correctly log the object obj

const anotherFunc = obj.myFunc.bind(obj);
anotherFunc(); //This will also correctly log the object obj