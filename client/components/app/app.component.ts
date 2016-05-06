import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'my-app',
  templateUrl: 'client/components/app/app.component.html',
  styleUrls: ['client/components/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  {
    path: '/',
    component: HomeComponent
  }
])

export class AppComponent {
  constructor() { }
}