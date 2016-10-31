import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  downloadResume() {
    window.location.href = 'https://drive.google.com/uc?export=download&id=0B2HRo77RSb3FZzR6Vjk5OGFiN2c';
  }

}
