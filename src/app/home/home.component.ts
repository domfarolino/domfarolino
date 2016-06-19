import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MdButton, MD_CARD_DIRECTIVES]
})

export class HomeComponent implements OnInit, AfterViewInit {
  repos: string[];
  constructor(private elementRef: ElementRef) {
    this.repos = [
      'domfarolino/angular2-login-seed',
      'domfarolino/derbyhacks-hackathon',
      'domfarolino/directory-tree-print',
      'domfarolino/domfarolino'
    ];
  }
  
  ngOnInit() {
    
  }
  
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}