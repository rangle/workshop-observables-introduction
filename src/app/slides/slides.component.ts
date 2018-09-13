import { Component, HostListener } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, group } from '@angular/animations';
import { SlidesService } from './slides.service';
import { observablePatternImgBase64} from './assets/observable-pattern';
import { observableStreamImgBase64 } from './assets/observable-stream'

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  animations: [
    trigger('slideAnimation', [
      transition(":enter", [
        style({ opacity: 0, top: "-10px", position: 'relative' }),
        animate(300, style({ opacity: 1, top: "0" }))
      ]),
      transition(":leave", [
        style({ opacity: 0 }),
      ])
    ])
  ]
})
export class SlidesComponent {

  constructor(private slideService: SlidesService) {
    slideService.max = 19;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 37:
      case 38:
        this.slideService.prevSlide();
        break;
      case 39:
      case 40:
        this.slideService.nextSlide();
        break;
    }
  }
  observablePatternImgBase64 = observablePatternImgBase64;
  observableStreamImgBase64 = observableStreamImgBase64;

  codeCallBack = `
const getUser = (cb) => {
  setTimeout(() => {
    cb({name: 'Max'});
  }, 2000);
};

getUser((user) => {
  console.log(user.name); 
  // Prints 'Max' after 2 seconds.
});`;

  codePromises = `
const getUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      cb({name: 'Max'});
    }, 2000);
  });
};

getUser()
  .then(user => {
    console.log(user.name); 
    // Prints 'Max' after 2 seconds.
  });
`;

  codePromiseChain = `
checkAuth()
  .then(authStatus => {
    return getUser(authStatus);
  })
  .then(user => {
    console.log(user.name); 
    // Prints 'Max' after 2 seconds.
  })
  .catch(error => {
    // handle error here
  });
`;

  codeMap = `
function map(source, project) {
  return new Observable((observer) => {
    const mapObserver = {
      next: (x) => observer.next(project(x)),
      error: (err) => observer.error(err),
      complete: () => observer.complete()
    };
    return source.subscribe(mapObserver);
  });
}`;

}
