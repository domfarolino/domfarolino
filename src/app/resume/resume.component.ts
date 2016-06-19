import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-resume',
  templateUrl: 'resume.component.html',
  styleUrls: ['resume.component.css'],
  directives: [ROUTER_DIRECTIVES, MdButton, MD_CARD_DIRECTIVES]
})
export class ResumeComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit() {
  }
  
  goHome() {
    this._router.navigate(['/']);
  }

}
