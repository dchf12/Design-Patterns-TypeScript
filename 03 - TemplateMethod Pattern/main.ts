abstract class Display {
  protected abstract open(): void;
  protected abstract print(): void;
  protected abstract close(): void;
  display(): void {
    this.open();
    for (let i = 0; i < 3; i++) {
      this.print();
    }
    this.close();
  }
}

class CharDisplay extends Display {
  #char: string;
  constructor(char: string) {
    super();
    this.#char = char;
  }
  protected open(): void {
    process.stdout.write('<<');
  }
  protected print(): void {
    process.stdout.write(this.#char);
  }
  protected close(): void {
    console.log('>>');
  }
}

class StrDisplay extends Display {
  #str: string;
  #width: number;
  constructor(str: string) {
    super();
    this.#str = str;
    this.#width = this.getWidth();
  }
  protected open(): void {
    this.printLine();
  }
  protected print(): void {
    console.log(`|${this.#str}|`);
  }
  protected close(): void {
    this.printLine();
  }
  private printLine() {
    console.log(`+${Array(this.#width).fill('-').join('')}+`);
  }
  private getWidth(): number {
    let width = 0;
    for (const s of this.#str) {
      width += s.match(/[ -~]/) ? 1 : 2;
    }
    return width;
  }
}

const charDisplay: Display = new CharDisplay('A');
charDisplay.display();

const enStrDisplay: Display = new StrDisplay('Hello World');
enStrDisplay.display();

const jpStrDisplay: Display = new StrDisplay('こんにちは');
jpStrDisplay.display();
