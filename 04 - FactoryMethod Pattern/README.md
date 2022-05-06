# FactoryMethod Pattern

The FactoryMethod pattern aims to create objects more flexibly by adding some ideas to the method of creating objects

## Class Diagram

General class diagram of the FactoryMethod pattern

```mermaid
classDiagram
    class Product    {
        <<interface>>
    }
    class ConcreteProduct{
    }
    class Factory{
        factoryMethod()
    }
    class ConcreteFactory{
        factoryMethod()
    }
    Factory --> Product : create
    ConcreteFactory --> ConcreteProduct : create
    Product <|.. ConcreteProduct
    Factory <|-- ConcreteFactory
```
