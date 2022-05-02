/**
 * @method iterator MyIterator
 */
interface Aggregate {
  iterator(): MyIterator;
}

/**
 * @method hasNext boolean
 * @method next object
 */
interface MyIterator {
  hasNext(): boolean;
  next(): object;
}

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
 * @method add
 * @method getStudentAt
 * @method getLastNum
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
 * MyStudentList: Inheritance StudentList and Implement Aggregate
 */
class MyStudentList extends StudentList implements Aggregate {
  constructor(count?: number) {
    if (count) {
      super(count);
    } else {
      const count = 0;
      super(count);
    }
  }
  /**
   * @inheritdoc Aggregate.iterator
   * @returns MyStudentListIterator
   */
  iterator(): MyIterator {
    return new MyStudentListIterator(this);
  }
}

/**
 * MyStudentListIterator: Implement MyIterator
 */
class MyStudentListIterator implements MyIterator {
  #myStudentList: MyStudentList;
  #index: number = 0;

  constructor(list: MyStudentList) {
    this.#myStudentList = list;
  }
  hasNext(): boolean {
    return this.#myStudentList.getLastNum() > this.#index;
  }
  next(): object {
    const s = this.#myStudentList.getStudentAt(this.#index);
    this.#index++;
    return s;
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
 * @method createStudentList :クラスの生徒名簿を作成
 * @method callStudents :クラスの生徒を順番に標準出力に出力
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
