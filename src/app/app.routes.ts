import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: RouterConfig = [
  { path: '/', component: HomeComponent, index: true},
  { path: '/resume', component: ResumeComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];