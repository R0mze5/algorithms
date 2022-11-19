# Design Patterns in TypeScript

## Overview

A Design Pattern is a description or template that can be repeatedly applied to a commonly recurring problem in software design.

You will find a familiarity with Design Patterns very useful when planning, discussing, developing, managing and documenting your applications from now on and into the future.

* Creational
  * [Factory](./creational/Factory/description.md)
  * [Abstract Factory](./creational/AbstractFactory/description.md)
  * [Builder](./creational/Builder/description.md)
  * [Prototype](./creational/Prototype/description.md)
  * [Singleton](./creational/Singleton/description.md)
* Structural
  * [Decorator](./creational/Factory/description.md)
  * [Adapter](./creational/Factory/description.md)
  * [Facade](./creational/Factory/description.md)
  * [Bridge](./creational/Factory/description.md)
  * [Composite](./creational/Factory/description.md)
  * [Flyweight](./creational/Factory/description.md)
  * [Proxy](./creational/Factory/description.md)
* Behavioral
  * [Command](./creational/Factory/description.md)
  * [Chain of Responsibility](./creational/Factory/description.md)
  * [Observer Pattern](./creational/Factory/description.md)
  * [Interpreter](./creational/Factory/description.md)
  * [Iterator](./creational/Factory/description.md)
  * [Mediator](./creational/Factory/description.md)
  * [Memento](./creational/Factory/description.md)
  * [State](./creational/Factory/description.md)
  * [Strategy](./creational/Factory/description.md)
  * [Template](./creational/Factory/description.md)
  * [Visitor](./creational/Factory/description.md)

## Pattern Types

In the list of patterns above, there are Creational, Structural and Behavioral patterns.

* **Creational** : Abstracts the instantiation process so that there is a logical separation between how objects are composed and finally represented.
* **Structural** : Focuses more on how classes and objects are composed using the different structural techniques, and to form structures with more or altered flexibility.
* **Behavioral** : Are concerned with the inner algorithms, process flow, the assignment of responsibilities and the intercommunication between objects.

## Class Scope and Object Scope Patterns

Each pattern can be further specified whether it relates more specifically to classes or instantiated objects.

Class scope patterns deal more with relationships between classes and their subclasses.

Object scope patterns deal more with relationships that can be altered at runtime

| Pattern      | Description |Scope |Type |
| ----------- | ----------- | ----------- | ----------- |
| Factory, Abstract Factory | Defers object creation to subclasses | Class | Creational |
| Builder, Prototype, Singleton | Defers object creation to objects | Object | Creational |
| Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy | Describes a way to assemble objects | Object | Structural |
| Interpreter, Template | Describes algorithms and flow control | Class | Behavioral |
| Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor | Describes how groups of objects co-operate | Object | Behavioral |
