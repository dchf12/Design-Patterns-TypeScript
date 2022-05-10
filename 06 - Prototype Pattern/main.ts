interface Cloneable {
  createClone(): Cloneable;
}

class Paper implements Cloneable {
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
  createClone(): Cloneable {
    return new Paper(this.#name);
  }
}

class Teacher1 {
  createManyCrystals(): Paper[] {
    const prototype: Paper = new Paper('雪の結晶');
    this.drawCrystal(prototype);
    this.cutAccordanceWithLine(prototype);

    const papers: Paper[] = new Array(10);

    for (let i = 0; i < papers.length; i++) {
      papers[i] = <Paper>prototype.createClone();
    }
    return papers;
  }
  private drawCrystal(paper: Paper): void {
    // too long
  }
  private cutAccordanceWithLine(paper: Paper): void {
    // too long
  }
}
console.log(new Teacher1().createManyCrystals());
