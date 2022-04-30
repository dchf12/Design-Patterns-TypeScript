enum Sex {
  Man = 1,
  Woman,
}

/**
 * 生徒
 * @param name 名前
 * @param sex  性別
 *
 */
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

/**
 * 生徒の名簿
 * @param students 全ての生徒
 */
class StudentList {
  protected _students: Student[] = [];
  #last = 0;
  constructor(count: number) {
    this._students = new Array(count);
  }
  /**
   * add
   * @returns void
   */
  add(student: Student): void {
    this._students[this.#last] = student;
    this.#last++;
  }
  /**
   * getStudentAt
   * @param index 順番
   * @returns  _students[index]
   */
  getStudentAt(index: number): Student {
    return this._students[index];
  }
  /**
   * getLastNum
   * @returns #last
   */
  getLastNum(): number {
    return this.#last;
  }
}

/**
 * Teacherの能力
 * @param _studentList 生徒の名簿
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
