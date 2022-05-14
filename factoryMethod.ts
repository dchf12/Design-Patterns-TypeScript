interface Product {
  operation(): string;
}

class ConcreteProduct implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct}';
  }
}

abstract class Factory {
  public abstract factoryMethod(): Product;
  public someOperation(): string {
    const product = this.factoryMethod();
    return `${product.operation()}`;
  }
}

class ConcreteFactory extends Factory {
  public factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

function clientCode(factory: Factory) {
  console.log(factory.someOperation());
}

clientCode(new ConcreteFactory());
