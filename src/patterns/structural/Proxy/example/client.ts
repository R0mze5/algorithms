/**
In this example, I dynamically change the class of an object. So, I am essentially using an object as a proxy to other classes.

Every time the tell_me_the_future() method is called; it will randomly change the object to use a different class.

The object PROTEUS will then use the same static attributes and class methods of the new class instead.
 */
import Lion from "./lion";

const PROTEUS = new Lion();
PROTEUS.tellMeYourForm();
PROTEUS.tellMeTheFuture();
PROTEUS.tellMeYourForm();
PROTEUS.tellMeTheFuture();
PROTEUS.tellMeYourForm();
PROTEUS.tellMeTheFuture();
PROTEUS.tellMeYourForm();
PROTEUS.tellMeTheFuture();
PROTEUS.tellMeYourForm();
PROTEUS.tellMeTheFuture();
PROTEUS.tellMeYourForm();
PROTEUS.tellMeTheFuture();
PROTEUS.tellMeYourForm();
