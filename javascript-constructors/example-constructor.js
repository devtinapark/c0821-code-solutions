function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('type of ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var anInstance = new ExampleConstructor();
console.log('value of anInstance: ', anInstance);

var x = anInstance instanceof ExampleConstructor;
console.log('anInstance instanceof ExampleConstructor: ', x);
