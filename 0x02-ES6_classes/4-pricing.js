import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // `amount` Setter and Getter
  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  // `currency` Setter and Getter
  set currency(currency) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static conversionRate(amount, conversionRate) {
    return amount * conversionRate;
  }
}
