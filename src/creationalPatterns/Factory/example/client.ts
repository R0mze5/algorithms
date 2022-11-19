// Factory Use Case Example Code

/**
An example use case may be a user interface where the user can select from a menu of items, such as chairs.

The user has been given a choice using some kind of navigation interface, and it is unknown what choice, or how many chairs the user will add until the application is actually running, and the user starts using it.

So, when the user selected the chair, the factory then takes some property involved with that selection, such as an ID, Type or other attribute and then decides which relevant subclass to instantiate in order to return the appropriate object.

While there are is a large amount of code in this example, and it is spread across several files, the actual factory is the ChairFactory class in the file chair-factory.ts. So, the factory is the part of your program that is creating a separation or abstraction between the instantiating of your object and where it is used.
 */

import ChairFactory from "./chair-factory";

const CHAIR = ChairFactory.getChair("SmallChair");
console.log(CHAIR.getDimensions());
