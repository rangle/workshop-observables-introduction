import { Routes } from '@angular/router';
import { SlidesComponent } from './slides/slides.component';
import { Lesson1Component } from './lessons/lesson1/lesson1.component';
import { Lesson2Component } from './lessons/lesson2/lesson2.component';
import { CallBackComponent } from './lessons/call-back/call-back.component';
import { PromisesComponent } from './lessons/promises/promises.component';


export const routerConfig: Routes = [
  {
    path: 'one',
    pathMatch: 'full',
    component: Lesson1Component
  },
  {
    path: 'two',
    pathMatch: 'full',
    component: Lesson2Component
  },
  {
    path: 'callback',
    pathMatch: 'full',
    component: CallBackComponent
  },
  {
    path: 'promises',
    pathMatch: 'full',
    component: PromisesComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: SlidesComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];
