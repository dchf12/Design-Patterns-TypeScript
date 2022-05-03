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

function main() {
  const chairperson: Chairperson = new NewTaro();
  chairperson.organizeClass();
}
