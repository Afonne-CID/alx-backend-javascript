export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // `code` Setters and Getters
  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  // `name` Setters and Getters
  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
