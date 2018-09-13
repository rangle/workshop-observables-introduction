import { Component, OnInit } from '@angular/core';

interface UserData {
  name: string;
}

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit {

  /**
   * Get User Example
   */
  userName = '';

  private getUser: () => Promise<UserData> = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({name: 'Max'});
      }, 2000);
    });
  };

  requestUser() {
    this.userName = "loading...";

    this.getUser()
        .then(user => {
          this.userName = user.name
          // Prints 'Max' after 2 seconds.
        });
  }

  /**
   * Get Admin User Example
   */
  adminUserName = '';

  private checkAuth: () => Promise<string> = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('OK');
      }, 1000);
    });
  };

  requestAdminUser() {    
    this.adminUserName = "authing...";

    // Promises can be chained!
    this.checkAuth()
        .then(authStatus => {
          this.adminUserName = "loading..."
          return authStatus === 'OK'
            ? this.getUser()
            : Promise.reject('Nah');
        })
        .then(user => {
          this.adminUserName = user.name;
        })
        .catch(error => {
          // handle error here
        });
  }

  constructor() { }

  ngOnInit() {
    this.requestUser();
    this.requestAdminUser();
  }
}