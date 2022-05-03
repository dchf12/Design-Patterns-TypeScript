// using inheritance
class Taro {
  enjoyWithAllClassmate(): void {
    console.log('Hello');
  }
}
interface Chairperson {
  organizeClass(): void;
}
class NewTaro extends Taro implements Chairperson {
  organizeClass(): void {
    this.enjoyWithAllClassmate();
  }
}

// using delegation
class Hanako implements Chairperson {
  private taro: Taro = new Taro();
  organizeClass(): void {
    this.taro.enjoyWithAllClassmate();
  }
}

function main() {
  const chairperson: Chairperson = new Hanako();
  chairperson.organizeClass();
}
main();
