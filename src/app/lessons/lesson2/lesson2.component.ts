import { Component, OnInit } from '@angular/core';
import { myObservable } from './my-observable';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html'
})
export class Lesson2Component implements OnInit {

  counter = 0;
  unsub: any;
  isDone = true;

  constructor() { }

  start() {
    this.isDone = false;
    /**
     * now let's use it
     */
    this.unsub = myObservable.subscribe({
      next: (data) => { this.counter = data },
      error: (err) => { console.error(err); },
      complete: () => { this.isDone = true; }
    });

    /**
     * uncomment to try out unsubscription
     */
    // setTimeout(unsub, 600);
  }
  
  stop() {
    this.unsub();
    this.counter = 0;
    this.isDone = true;
  }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    if (this.unsub) {
      this.unsub();
    } 
  }

}