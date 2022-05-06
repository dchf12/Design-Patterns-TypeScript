abstract class AbstractClass {
  protected abstract method1(): void;
  public templateMethod(): void {
    this.method1();
  }
}

class ConcreteClass extends AbstractClass {
  protected method1(): void {
    console.log('method1');
  }
}

function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

clientCode(new ConcreteClass());
