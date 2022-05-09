class Singleton {
  static #singleton: Singleton;
  private constructor() {}
  public static get instance(): Singleton {
    if (!this.#singleton) {
      this.#singleton = new Singleton();
    }
    return this.#singleton;
  }
}

const singleton = Singleton.instance;
