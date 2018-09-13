import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
template: `
<section class="gray pa3 bb flex r-bg-color">
<a routerLink="/" class="pr2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.6 55.9" height="1em" width="100" class="pr3"><path fill="#fff" d="M7.1 51.3c0 1.2 0 2-.5 2.7-.5.7-1.6 1.2-3.1 1.2S1 54.7.5 54 0 52.4 0 51.3V6.2C0 4 0 2.4 3.6 1.6c1.7-.4 4.6-.7 8-.7 4.2 0 9 .5 12.8 2.5 4.8 2.5 7.5 6.8 7.5 12.7 0 6.8-3.7 12-10.5 14.7l14.9 20.5c1.3 1.8 1 4-2.8 4-3 0-3.9-1.3-5.2-3.2l-9.7-13.9c-2.6-3.6-3.9-6-3.9-6s-1.7.2-4.3.2c-2.2 0-3.1-.2-3.1-.2v19.1zm0-24.9s1.1.2 3.2.2c8.9 0 14-3.1 14-10.1 0-7.4-5.9-9.5-12.4-9.5-2.7 0-4.8.3-4.8.3v19.1zM103.8 51.3c0 1.2 0 2-.5 2.7-.7 1-1.9 1.2-2.9 1.2-1.4 0-2.4-.4-3-1.2-.5-.7-.5-1.6-.5-2.7V3.8c0-2 1.2-3.1 3.3-3.1 2.4 0 3.5 1.3 5.3 3.6l30.2 38V4.8c0-1.2 0-2 .5-2.7.7-1 1.9-1.2 2.9-1.2 1.4 0 2.4.4 3 1.2.5.7.5 1.6.5 2.7v47.6c0 1.9-1.1 3-3.2 3-2.2 0-3.2-1.2-5.1-3.5l-30.5-38.4v37.8zM200.2 47.7c0 2.6-.7 3.9-4.9 5.4-4 1.5-8.5 2.4-13.4 2.4-15.9 0-28.6-9.3-28.6-27.8C153.3 7.8 168.1.1 181.9.1c5.2 0 10.3 1.1 14.6 3.4 2.4 1.3 3.4 2.3 3.4 3.7 0 1.6-1.2 3.6-2.9 3.6-1.4 0-2.7-1.3-5.9-2.6-2.3-.9-5.8-1.8-9.8-1.8-9.8 0-20.6 5.5-20.6 20.9 0 14.6 9.6 21.8 21.2 21.8 6.6 0 11.1-2.3 11.1-2.3v-9.4c0-1.2 0-2 .5-2.7.5-.7 1.7-1.2 3.1-1.2 1.5 0 2.7.5 3.2 1.2s.5 1.6.5 2.7v10.3zM237.5 48.4c1.1 0 1.9.1 2.7.6.7.5 1.1 1.3 1.1 2.6s-.4 2.1-1.1 2.6c-.7.5-1.6.6-2.7.6h-22.1c-2.7 0-3.5-1.2-3.5-3.5V4.8c0-1.2 0-2 .5-2.7.5-.7 1.7-1.2 3.1-1.2 1.5 0 2.7.5 3.2 1.2s.5 1.6.5 2.7v43.6h18.3zM256.4 22.8h13c1.1 0 1.9.1 2.7.6.7.5 1.1 1.3 1.1 2.6s-.4 2.1-1.1 2.6c-.7.5-1.6.6-2.7.6h-13v19.2h18.4c1.1 0 1.9.1 2.7.6.7.5 1.1 1.3 1.1 2.6s-.4 2.1-1.1 2.6c-.7.5-1.6.6-2.7.6h-22.1c-2.7 0-3.5-1.1-3.5-3.5V4.9c0-2.5 1-3.5 3.5-3.5h19.7c1.1 0 1.9.1 2.7.6.7.5 1.1 1.3 1.1 2.6s-.4 2.1-1.1 2.6c-.7.5-1.6.6-2.7.6h-16v15z"/><path fill="#E6383A" d="M290.7 55.5c-2.7 0-4.5-1.8-4.5-4.5 0-2.6 1.8-4.4 4.5-4.4 2.6 0 4.4 1.9 4.4 4.4 0 2.7-1.8 4.5-4.4 4.5zM310.7 51.3c0 1.2 0 2-.5 2.7-.5.7-1.7 1.2-3.1 1.2-1.5 0-2.7-.5-3.2-1.2s-.5-1.6-.5-2.7V4.8c0-1.2 0-2 .5-2.7.5-.7 1.7-1.2 3.1-1.2 1.5 0 2.7.5 3.2 1.2s.5 1.6.5 2.7v46.5zM349 0c16.9 0 27.6 11.6 27.6 27.9 0 16.5-10.9 28-27.8 28S321.2 44.3 321.2 28c0-16.5 10.9-28 27.8-28zm0 49.8c12.3 0 20.1-8 20.1-21.8 0-13.9-8-21.9-20.3-21.9s-20.1 8-20.1 21.8c0 13.9 7.9 21.9 20.3 21.9z"/><path fill="#fff" d="M88.1 50.7L70.3 4.8C69.3 2.3 68.5.7 66 .7c-2.6 0-3.5 1.7-4.5 4.2L42.9 50.8c-.4 1.1-.6 1.7-.6 2.2 0 1.3.9 2.2 3.2 2.2 2.8 0 3.5-1.4 4.3-3.5l2.8-7.1.2-.6 2.7-6.9 3.2-8.3 6.9-17.5L73.1 31H62.7c-.2 0-.3.1-.4.2l-2.1 5.4c-.1.2.1.5.4.5h14.8L81 51.7c.9 2.4 1.8 3.5 4.4 3.5 2.3 0 3.4-.9 3.4-2.3-.1-.5-.3-1.4-.7-2.2z"/></svg></a>
  <a routerLink="/home" routerLinkActive="b" class="pr2 white">Slides</a>
  <span class="pr2">|</span>
  <a routerLink="/one" routerLinkActive="b" class="pr2 white">Lesson1</a>
  <span class="pr2">|</span>
  <a routerLink="/two" routerLinkActive="b" class="pr2 white">Lesson2</a>
  <span class="pr2">|</span>
  <a routerLink="/callback" routerLinkActive="b" class="pr2 white">Callback</a>
  <span class="pr2">|</span>
  <a routerLink="/promises" routerLinkActive="b" class="pr2 white">Promises</a>
</section>`
})
export class NavigationComponent {

  constructor() { }

}
