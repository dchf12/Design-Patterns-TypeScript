# Iterator Pattern

The Iterator pattern is a pattern that provides a way to access each element of an object that holds a collection of elements in sequence

## Class Diagram

General class diagram of the Iterator pattern

```mermaid
classDiagram
    direction LR
    class Aggregate{
        <<Interface>>
        iterator()
    }
    class Iterator{
        <<Interface>>
        hasNext()
        next()
    }
    class ConcreteIterator{
        concreteAggregate
        hasNext()
        next()
    }
    class ConcreteAggregate{
        iterator()
    }

    Aggregate <|.. ConcreteAggregate
    Aggregate --|> Iterator : Create
    Iterator <|.. ConcreteIterator
    ConcreteAggregate --o ConcreteIterator
```

### Class Diagram for example

```mermaid
classDiagram
    direction LR
    class Aggregate{
        <<Interface>>
        iterator()
    }
    class Iterator{
        <<Interface>>
        hasNext()
        next()
    }
    class MyStudentIterator{
        MyStudentList myStudentList
        index
        hasNext()
        next()
    }
    class Student{
        name
        sex
        getName()
        getSex()
    }
    class StudentList{
        last
        Student students
        addStudent()
        getStudentAt()
        getLastNum()
    }
    class MyStudentList{
        iterator() new MyStudentIterator
    }

    Aggregate <|.. MyStudentList
    Aggregate --|> Iterator : Create
    MyStudentList --o MyStudentIterator
    Iterator <|.. MyStudentIterator
    StudentList <|-- MyStudentList
    Student --o StudentList
```
