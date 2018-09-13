import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routerConfig } from './app.routes';

import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { NavigationComponent } from './navigation.component';
import { Lesson1Component } from './lessons/lesson1/lesson1.component';
import { Lesson2Component } from './lessons/lesson2/lesson2.component';
import { SlidesService } from './slides/slides.service';
import { CallBackComponent } from './lessons/call-back/call-back.component';
import { PromisesComponent } from './lessons/promises/promises.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routerConfig)],
  declarations: [
    AppComponent,
    SlidesComponent,
    Lesson1Component,
    NavigationComponent,
    Lesson2Component,
    CallBackComponent,
    PromisesComponent],
  bootstrap: [AppComponent],
  providers: [SlidesService]
})
export class AppModule { }
