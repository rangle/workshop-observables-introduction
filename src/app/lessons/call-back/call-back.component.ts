import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-back',
  template: `
  <h1>Callback Example</h1>
  <p>Look at <code>app/lessons/callback</code> folder.</p>
  <div>
    <h3>User: {{userName}}</h3>
    <button (click)="requestUser()">Get User</button>
  </div>`
})
export class CallBackComponent implements OnInit {

  userName = '';
  getUser = (cb) => {
    // Simulating api request.
    setTimeout(() => {
      cb({ name: 'Ben' });
    }, 2000);
  };

  constructor() {}

  ngOnInit() {
    this.requestUser();
  }

  requestUser() {
    this.userName = "loading...";
    this.getUser((user) => {
      this.userName = user.name;
    });
  }

}