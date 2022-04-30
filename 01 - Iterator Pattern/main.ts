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
class StudentList {
  protected _students: Student[] = [];
  private _last = 0;
  constructor(count: number) {
    this._students = new Array(count);
  }
  /**
   * add
   */
  public add(student: Student): void {
    this._students[this._last] = student;
    this._last++;
  }
  /**
   * getStudentAt
   */
  public getStudentAt(index: number): Student {
    return this._students[index];
  }
  /**
   * getLastNum
   */
  public getLastNum(): number {
    return this._last;
  }
}
abstract class Teacher {
  constructor(protected _studentList: StudentList) {}
  abstract createStudentList(): void;
  abstract callStudents(): void;
}

function main() {
  const sl = new StudentList(3);
  sl.add(new Student('name1', Sex.Man));
  sl.add(new Student('name2', Sex.Man));
  sl.add(new Student('name3', Sex.Woman));
  console.log(sl);
}

main();
