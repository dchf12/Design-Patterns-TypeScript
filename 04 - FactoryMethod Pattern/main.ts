interface Product {
  use(): void;
}

abstract class Factory {
  protected abstract createProduct(owner: string): Product;
  protected abstract registerProduct(product: Product): void;
  create(owner: string): Product {
    const product: Product = this.createProduct(owner);
    this.registerProduct(product);
    return product;
  }
}

class IDCard implements Product {
  #owner: string;
  constructor(owner: string) {
    console.log(`${owner}のカードを作成`);
    this.#owner = owner;
  }
  public get owner(): string {
    return this.#owner;
  }
  use(): void {
    console.log(`${this.#owner}のカードを使用`);
  }
}

class IDCardFactory extends Factory {
  #owners: string[] = [];
  protected createProduct(owner: string): Product {
    return new IDCard(owner);
  }
  protected registerProduct(idcard: IDCard): void {
    this.#owners.push(idcard.owner);
  }
}

const factory: Factory = new IDCardFactory();
const card1: Product = factory.create('1');
const card2: Product = factory.create('2');
const card3: Product = factory.create('3');

card1.use();
card2.use();
card3.use();
