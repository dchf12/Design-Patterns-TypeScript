enum Sex {
  Man = 1,
  Woman,
}
class Student {
  #name: string;
  #sex: number;
  constructor(name: string, sex: number) {
    this.#name = name;
    this.#sex = sex;
  }

  get name(): string {
    return this.#name;
  }

  get sex(): Sex {
    return this.#sex;
  }
}
class StudentList {
  protected _students: Student[] = [];
  #last = 0;
  constructor(count: number) {
    this._students = new Array(count);
  }
  /**
   * add
   */
  add(student: Student): void {
    this._students[this.#last] = student;
    this.#last++;
  }
  /**
   * getStudentAt
   */
  getStudentAt(index: number): Student {
    return this._students[index];
  }
  /**
   * getLastNum
   */
  getLastNum(): number {
    return this.#last;
  }
}

/**
 * Teacherの能力
 * 学校から与えられた名簿に自分の生徒を書き込むことができる
 * 生徒の名前を名簿の記載順に呼ぶことができる
 */
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
  console.log(sl.getStudentAt(0).name);
  console.log(sl.getStudentAt(1).sex);
  console.log(sl.getLastNum());
}

main();
