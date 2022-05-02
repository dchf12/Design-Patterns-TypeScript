interface Iterator {
  hasNext(): boolean;
  next(): object;
}

interface Aggregate {
  iterator(): Iterator;
}

class ConcreteIterator implements Iterator {
  private concreteAggregate: ConcreteAggregate[] = [];
  private index: number = 0;

  constructor(concreteAggregate: ConcreteAggregate[]) {
    this.concreteAggregate = concreteAggregate;
  }

  hasNext(): boolean {
    return this.index < this.concreteAggregate.length;
  }

  next(): object {
    var result = this.concreteAggregate[this.index];
    this.index++;
    return result;
  }
}

class ConcreteAggregate implements Aggregate {
  private concrete: Concrete[] = [];

  constructor(concreteSize: number) {
    this.concrete = new Array(concreteSize);
  }
  iterator(): Iterator {
    return new ConcreteIterator(this);
  }
}
