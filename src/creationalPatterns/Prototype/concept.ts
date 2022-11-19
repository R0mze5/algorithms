/**
Experiment with the concept code.

By default, it will shallow copy the object you've asked to be cloned.

In my example, I have created an array of numbers. At first impressions, when this array is copied, it will appear that the array was fully cloned. But the inner items of the array were not. They will point to the same memory location as the original array; however, the memory identifier of the new array is new and different from the original.

In the MyClass.clone() method, there is a line return JSON.parse(JSON.stringify(this)); that is commented out. Uncomment out this line, and comment out the line before it to now be // return Object.assign({}, this). Re compile and execute the file, and now the array items will be copied as well. This is a deep copy.

Remember that full deep copies can potentially be much slower for very complicated object hierarchies.
 */

export interface IProtoType {
  // interface with clone method
  clone(): this;
  // The clone is deep or shallow.
  // It is up to you how you want to implement
  // the details in your concrete class
}

class MyClass implements IProtoType {
  // A Concrete Class
  field: number[];

  constructor(field: number[]) {
    this.field = field; // any value of any type
  }

  clone() {
    return { ...this }; // shallow copy
    // return JSON.parse(JSON.stringify(this)); //deep copy
  }
}

// The Client
// Create an object containing an array
const OBJECT1 = new MyClass([1, 2, 3, 4]);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`);

const OBJECT2 = OBJECT1.clone(); // Clone
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);
// Change the value of one of the array elements in OBJECT2
// Depending on your clone method, either a shallow or deep copy
// was performed
OBJECT2.field[1] = 101;

// Comparing OBJECT1 and OBJECT2
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`);
