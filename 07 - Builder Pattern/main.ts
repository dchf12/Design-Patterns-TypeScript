class SaltWater {
  constructor(public water: number, public salt: number) {}
}
class SugarWater {
  constructor(public water: number, public salt: number) {}
}
const saltWater = new SaltWater(100, 40);
const saltDelta = 70 * (saltWater.salt / (saltWater.salt + saltWater.water));
const waterDelta = 70 * (saltWater.water / (saltWater.salt + saltWater.water));
saltWater.salt -= saltDelta;
saltWater.water -= waterDelta;
saltWater.water += 100;
saltWater.salt += 15;

console.log(saltWater);
