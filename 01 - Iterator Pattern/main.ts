enum Sex {
  Man = 1,
  Woman,
}
class Student {
  constructor(private _name: string, private _sex: Sex) {}

  public get name(): string {
    return this._name;
  }

  public get sex(): Sex {
    return this._sex;
  }
}

function main() {
  const s = new Student('aaa', 1);
  console.log(s.name);
}
main();
