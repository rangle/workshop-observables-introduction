/**
 * Every 250 ms, it will emit an incrementing number.
 * This datasource could be substituted for any stream of data.
 * 
 * NOTE: this will clearly never error
 */

export class DataSource {

  _id: number;
  onData: any;
  onComplete: any;
  onError: any;

  constructor() {
    let i = 0;
    this._id = setInterval(() => this.emit(i++), 200);
  }

  emit(n) {
    const limit = 10;
    if (this.onData) {
      this.onData(n);
    }
    if (n === limit) {
      if (this.onComplete) {
        this.onComplete();
      }
      this.destroy();
    }
  }

  destroy() {
    clearInterval(this._id);
  }
}
