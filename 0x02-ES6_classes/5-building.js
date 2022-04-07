export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter
  get() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
