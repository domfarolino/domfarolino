import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'my-app',
  templateUrl: 'client/components/app/app.component.html',
  styleUrls: ['client/components/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  constructor() { }
  title = "Dom Farolino"
}