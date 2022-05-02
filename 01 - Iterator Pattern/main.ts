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
 * @param students Student[]
 * @function add
 * @function getStudentAt
 * @function getLastNum
 */
class StudentList {
  protected _students: Student[] = [];
  #last = 0;
  constructor(count: number) {
    this._students = new Array(count);
  }
  /**
   * addStudent
   * @returns void
   */
  addStudent(student: Student): void {
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
 * MyStudentList: StudentList継承
 */
class MyStudentList extends StudentList {
  constructor(count: number) {
    super(count);
  }
}

/**
 * Teacherの能力
 * @param _studentList 生徒の名簿
 */
abstract class Teacher {
  abstract createStudentList(): void;
  abstract callStudents(): void;
}

/**
 * MyTeacher: Teacherクラス継承
 * @param _studentList 生徒の名簿
 * @function createStudentList :クラスの生徒名簿を作成
 * @function callStudents :クラスの生徒を順番に標準出力に出力
 */
class MyTeacher extends Teacher {
  #studentList: StudentList;
  constructor() {
    super();
    this.#studentList = new StudentList(5);
  }

  /**
   * createStudentList
   * 生徒名簿作成
   * @returns void
   */
  createStudentList(): void {
    this.#studentList.addStudent(new Student('赤井亮太', Sex.Man));
    this.#studentList.addStudent(new Student('赤羽里美', Sex.Woman));
    this.#studentList.addStudent(new Student('岡田美央', Sex.Woman));
    this.#studentList.addStudent(new Student('西森俊介', Sex.Man));
    this.#studentList.addStudent(new Student('中ノ森玲菜', Sex.Woman));
  }

  /**
   * callStudents
   * 生徒呼び出し
   * @returns void
   */
  callStudents(): void {
    const size = this.#studentList.getLastNum();
    for (let i = 0; i < size; i++) {
      console.log(this.#studentList.getStudentAt(i).name);
    }
  }
}

function main() {
  const you = new MyTeacher();
  you.createStudentList();
  you.callStudents();
}

main();
