# Design Patterns in TypeScript

## Overview

A Design Pattern is a description or template that can be repeatedly applied to a commonly recurring problem in software design.

You will find a familiarity with Design Patterns very useful when planning, discussing, developing, managing and documenting your applications from now on and into the future.

* Creational
  * [Factory](./creationalPatterns/Factory/description.md)
  * [Abstract Factory](./creationalPatterns/AbstractFactory/description.md)
  * [Builder](./creationalPatterns/Builder/description.md)
  * [Prototype](./creationalPatterns/Prototype/description.md)
  * [Singleton](./creationalPatterns/Singleton/description.md)
* Structural
  * [Decorator](./creationalPatterns/Factory/description.md)
  * [Adapter](./creationalPatterns/Factory/description.md)
  * [Facade](./creationalPatterns/Factory/description.md)
  * [Bridge](./creationalPatterns/Factory/description.md)
  * [Composite](./creationalPatterns/Factory/description.md)
  * [Flyweight](./creationalPatterns/Factory/description.md)
  * [Proxy](./creationalPatterns/Factory/description.md)
* Behavioral
  * [Command](./creationalPatterns/Factory/description.md)
  * [Chain of Responsibility](./creationalPatterns/Factory/description.md)
  * [Observer Pattern](./creationalPatterns/Factory/description.md)
  * [Interpreter](./creationalPatterns/Factory/description.md)
  * [Iterator](./creationalPatterns/Factory/description.md)
  * [Mediator](./creationalPatterns/Factory/description.md)
  * [Memento](./creationalPatterns/Factory/description.md)
  * [State](./creationalPatterns/Factory/description.md)
  * [Strategy](./creationalPatterns/Factory/description.md)
  * [Template](./creationalPatterns/Factory/description.md)
  * [Visitor](./creationalPatterns/Factory/description.md)

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
