import { Injectable } from '@angular/core';

@Injectable()
export class SlidesService {

  _slide = 0;
  _max = 0;

  constructor() { }

  get slide() {
    return this._slide;
  }
  get max() {
    return this._max;
  }
  set max(value: number) {
    this._max = value;
  }
  get isFirst() {
    return this._slide === 0;
  }

  get isLast() {
    return this._slide === this._max;
  }

  nextSlide() {
    if (this.isLast) return;
    this._slide++;
  }
  prevSlide() {
    if (this.isFirst) return;
    this._slide--;
  }


}