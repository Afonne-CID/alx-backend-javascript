export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }

    if (!(students instanceof Array)) {
      throw TypeError('Students must be an Array');
    }

    for (const i of students) {
      if (typeof i !== 'string') {
        throw TypeError('Students must be an Array');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // `name` Setters and Getters
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  // `length` Setters and Getters
  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  // `students` Setters and Getters
  set students(students) {
    if (!(students instanceof Array)) {
      throw TypeError('Students must be an Array');
    }

    for (const i of students) {
      if (typeof i !== 'string') {
        throw TypeError('Students must be an Array');
      }
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
