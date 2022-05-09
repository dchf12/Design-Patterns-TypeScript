class RegisterNote {
  static #registerNote: RegisterNote;
  private constructor() {
    console.log('インスタンス生成');
  }
  public static get instance(): RegisterNote {
    if (!this.#registerNote) {
      this.#registerNote = new RegisterNote();
    }
    return this.#registerNote;
  }
}

const note1 = RegisterNote.instance; // シングルトンのgetterを直接呼び出す
const note2 = RegisterNote.instance; // シングルトンのgetterをもう一度呼び出す
if (note1 === note2) {
  // シングルトンのgetterで呼び出した2つのインスタンスが同じかを確かめる
  console.log('同じインスタンス');
} else {
  console.log('同じインスタンスではない');
}
