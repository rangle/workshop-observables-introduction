import { Component, OnDestroy } from '@angular/core';
import { myObservable, Observer } from './my-observable';

/**
 * In our counter component, we build an observer to match
 * the contract with the observable.
 * 
 * In this case, we take the Observable and set our local
 * variable this.counter to the value emitted from it,
 * thus updating the UI.
 * 
 * Our myObservable() function returns a function 
 * `this.unsub` that when invoked, destroys the subscription.
 */

@Component({
  selector: 'app-one',
  templateUrl: './lesson1.component.html'
})
export class Lesson1Component {

  counter = 0;
  unsub: any;
  isDone = true;

  constructor() { }

  start() {
    this.isDone = false;
    /**
     * Let's use our own observable.
     */
    this.unsub = myObservable({
      next: (data) =>{ this.counter = data },
      error: (err) => { this.isDone = true; },
      complete: () =>{ this.isDone = true; }
    });

    /**
     * Challenge: Try out unsubscription
     */
    // setTimeout( /* your code here */, 1000);
  }

  stop() {
    this.unsub();
    this.counter = 0;
    this.isDone = true;
  }

  ngOnDestroy() {
    if (this.unsub) {
      this.unsub();
    } 
  }

}
