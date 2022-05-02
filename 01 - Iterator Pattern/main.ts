/**
 * @method iterator MyIterator
 */
interface Aggregate<T> {
  iterator(): MyIterator<T>;
}

/**
 * @method hasNext boolean
 * @method next object
 */
interface MyIterator<T> {
  hasNext(): boolean;
  next(): T;
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
 * @param count 生徒数
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
class MyStudentList extends StudentList implements Aggregate<Student> {
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
  iterator(): MyIterator<Student> {
    return new MyStudentIterator(this);
  }
}

/**
 * MyStudentIterator: Implement MyIterator
 */
class MyStudentIterator implements MyIterator<Student> {
  #myStudentList: MyStudentList;
  #index: number = 0;

  constructor(list: MyStudentList) {
    this.#myStudentList = list;
  }
  hasNext(): boolean {
    return this.#myStudentList.getLastNum() > this.#index;
  }
  next(): Student {
    const s = this.#myStudentList.getStudentAt(this.#index);
    this.#index++;
    return s;
  }
}

/**
 * Teacherの能力
 * @param studentList 生徒の名簿
 */
abstract class Teacher {
  abstract createStudentList(): void;
  abstract callStudents(): void;
}

/**
 * MyTeacher: Teacherクラス継承
 * @param studentList 生徒の名簿
 * @method createStudentList :クラスの生徒名簿を作成
 * @method callStudents :クラスの生徒を順番に標準出力に出力
 */
class MyTeacher extends Teacher {
  #studentList: MyStudentList;
  #myStudentData: StudentData;
  constructor(sData: StudentData) {
    super();
    this.#studentList = new MyStudentList(Object.keys(sData).length);
    this.#myStudentData = sData;
  }

  /**
   * createStudentList
   * 生徒名簿作成
   * @returns void
   */
  createStudentList(): void {
    for (const key in this.#myStudentData) {
      this.#studentList.addStudent(new Student(key, this.#myStudentData[key]));
    }
  }

  /**
   * callStudents
   * 生徒呼び出し
   * @returns void
   */
  callStudents(): void {
    const itr: MyIterator<Student> = this.#studentList.iterator();
    while (itr.hasNext()) {
      console.log(itr.next().name);
    }
  }
}

type StudentData = {
  [key: string]: number;
};
const studentData: StudentData = {
  赤井亮太: Sex.Man,
  赤羽里美: Sex.Woman,
  岡田美央: Sex.Woman,
  西森俊介: Sex.Man,
  中ノ森玲菜: Sex.Woman,
};

function main() {
  const you = new MyTeacher(studentData);
  you.createStudentList();
  you.callStudents();
}

main();
