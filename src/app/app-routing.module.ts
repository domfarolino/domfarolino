import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume/resume.component';
import { PublicKeyComponent } from './public-key/public-key.component';
import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'work-experience',
    component: WorkExperienceComponent
  },
  {
    path: 'public-key',
    component: PublicKeyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [WorkExperienceComponent, ResumeComponent, PublicKeyComponent, HomeComponent];
