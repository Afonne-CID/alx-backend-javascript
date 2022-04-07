export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // `name` Getter
  get name() {
    return this._name;
  }

  // `name` Setter
  set name(value) {
    this._name = value;
  }

  // `code` Getter
  get code() {
    return this.__code;
  }

  // `code` Setter
  set code(value) {
    this._code = value;
  }

  // Default string description
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
