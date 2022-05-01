# Iterator Pattern

The Iterator pattern is a pattern that provides a way to access each element of an object that holds a collection of elements in sequence.

## Class Diagram

General class diagram of the Iterator pattern

```mermaid
classDiagram
    class Aggregate{
        <<Interface>>
        iterator()
    }
    class Iterator{
        <<Interface>>
        hasNext()
        next()
    }
    class ConcreteAggregate{
        iterator()
    }
    class ConcreteIterator{
        concreteAggregate
        hasNext()
        next()
    }

    Aggregate <|.. ConcreteAggregate
    Aggregate --|> Iterator : Create
    ConcreteAggregate o-- ConcreteIterator
    Iterator <|.. ConcreteIterator
```
