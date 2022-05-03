# Adapter Pattern

The Adapter pattern is a pattern that aims to combine classes that are incompatible with each other in the interface

## Class Diagram

General class diagram of the Iterator pattern

### using inheritance

General class diagram of Adapter pattern using inheritance

```mermaid
classDiagram
    direction LR
    class Target    {
        <<Interface>>
        targetMethod()
    }
    class Adapter{
        targetMethod() : method()
    }
    class Adaptee{
        method()
    }
    Target <|.. Adapter : implements
    Adapter --|> Adaptee : extends
    Target <-- client : Uses
```

### using delegation

General class diagram of Adapter pattern using delegation

```mermaid
classDiagram
    direction LR
    class Target    {
        targetMethod()
    }
    class Adapter{
        adaptee
        targetMethod() : adaptee.method()
    }
    class Adaptee{
        method()
    }
    Target <|-- Adapter : extends
    Adapter o-- Adaptee
    Target <-- client : Uses
```
