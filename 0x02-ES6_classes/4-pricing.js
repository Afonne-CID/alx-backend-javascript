import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // `amount` Setter and Getter
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  // `currency` Setter and Getter
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
