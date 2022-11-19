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

## Summary

A table of one-liners to help summarize the design patterns

| Pattern|Description |
| ----------- | ----------- |
| Abstract Factory|Adds an abstraction over many other related objects that are created using other creational patterns. |
| Adapter|An alternative interface over an existing interface. |
| Bridge|The Bridge pattern is similar to the Adapter pattern except in the intent that you developed it. |
| Builder|A creational pattern whose intent is to separate the construction of a complex object from its representation so that you can use the same construction process to create different representations. |
| Chain of Responsibility|Pass an object through a chain of successor handlers. |
| Command|An abstraction between an object that invokes a command, and the object that performs it. Useful for UNDO/REDO/REPLAY. |
| Composite|A structural pattern useful for hierarchical management. |
| Decorator|Attach additional responsibilities to an object at runtime. |
| Facade|An alternative or simplified interface over other interfaces. |
| Factory|Abstraction between the creation of an object and where it is used. |
| Flyweight|Share objects rather than creating thousands of near identical copies. |
| Interpreter|Convert information from one language to another. |
| Iterator|Traverse a collection of aggregates. |
| Mediator|Objects communicate through a Mediator rather than directly with each other. |
| Memento|Save a copy of state and for later retrieval. Useful for UNDO/REDO/LOAD/SAVE. |
| Observer Pattern|Manage a list of dependents and notifies them of any internal state changes. |
| Prototype|Good for when creating new objects requires more resources than you need of have available. |
| Proxy|A class functioning as an interface to another class or object. |
| Singleton|A class that can be instanced at any time, but after it is first instanced, any new instances will point to the original instance. |
| State|Alter an objects' behavior by changing the handle of one of its methods to one of its subclasses dynamically to reflect its new internal state. |
| Strategy|Similar to the State Pattern, except that the client passes in the algorithm that the context should then run. |
| Template Method|An abstract class (template) that contains a method that is a series of instructions that are a combination of methods that can be overridden. |
| Visitor|Pass an object called a visitor to a hierarchy of objects and execute a method on them.|
