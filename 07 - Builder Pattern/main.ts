import { dir } from 'console';

class SaltWater {
  constructor(public water: number, public salt: number) {}
}
class SugarWater {
  constructor(public water: number, public salt: number) {}
}

interface Builder {
  addSolute(soluteAmount: number): void;
  addSolvent(solventAmount: number): void;
  abandonSolution(solutionAmount: number): void;
  getResult(): object;
}

class Director {
  constructor(private builder: Builder) {}
  constructSaltWater() {
    this.builder.addSolvent(100);
    this.builder.addSolute(40);
    this.builder.abandonSolution(70);
    this.builder.addSolvent(100);
    this.builder.addSolute(15);
  }
  constructSugarWater() {
    this.builder.addSolvent(100);
    this.builder.addSolute(40);
    this.builder.abandonSolution(70);
    this.builder.addSolvent(100);
    this.builder.addSolute(15);
  }
}

class SaltWaterBuilder implements Builder {
  #saltWater: SaltWater;
  constructor() {
    this.#saltWater = new SaltWater(0, 0);
  }
  addSolute(saltAmount: number): void {
    this.#saltWater.salt += saltAmount;
  }
  addSolvent(waterAmount: number): void {
    this.#saltWater.water += waterAmount;
  }
  abandonSolution(saltWaterAmount: number): void {
    const saltDelta =
      saltWaterAmount * (this.#saltWater.salt / (this.#saltWater.salt + this.#saltWater.water));
    const waterDelta =
      saltWaterAmount * (this.#saltWater.water / (this.#saltWater.salt + this.#saltWater.water));
    this.#saltWater.salt -= saltDelta;
    this.#saltWater.water -= waterDelta;
  }
  getResult(): object {
    return this.#saltWater;
  }
}

const builder: Builder = new SaltWaterBuilder();
const director: Director = new Director(builder);
director.constructSaltWater();
const salWater: SaltWater = builder.getResult() as SaltWater;
console.log(salWater);
