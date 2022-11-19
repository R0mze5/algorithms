// Decorator Use Case Example Code

/**
Let's create a custom class called Value that will hold a number.

Then add decorators that allow addition (Add) and subtraction (Sub) to a number (Value).

The Add and Sub decorators can accept numbers directly, a custom Value object or other Add and Sub decorators.

Add, Sub and Value all implement the IValue interface and can be used recursively.

Note that in this example use case, I have created the Add, Sub and Value as functions that return new instances of classes _Add, _Sub and _Value. This was not necessary, but it means that I can use the Add, Sub and Value in a recursive manner without needing to prefix the new keyword in front of each usage all the time.

 */

import Value from "./value";
import Add from "./add";
import Sub from "./sub";

const A = Value(1);
const B = Value(2);
const C = Value(5);

console.log(Add(A, B).value);
console.log(Add(A, 100).value);
console.log(Sub(C, A).value);
console.log(Sub(Add(C, B), A).value);
console.log(Sub(100, 101).value);
console.log(Add(Sub(Add(C, B), A), 100).value);
console.log(Sub(123, Add(C, C)).value);
console.log(Add(Sub(Add(C, 10), A), 100).value);
console.log(A.value);
console.log(B.value);
console.log(C.value);
