interface Prototype {
  clone(): Prototype;
}

class ConcretePrototype implements Prototype {
  field: number[] = [];
  constructor(field: number[]) {
    this.field = field;
  }
  clone(): this {
    return Object.assign(this);
  }
}

//client
const obj1 = new ConcretePrototype([1, 2, 3, 4]);
console.log(`obj1: ${JSON.stringify(obj1)}`);
const obj2 = obj1.clone();
console.log(`obj2: ${JSON.stringify(obj2)}`);
