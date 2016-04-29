import { Component, AfterViewInit, ElementRef } from 'angular2/core';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'home',
  templateUrl: 'client/components/home/home.component.html',
  styleUrls: ['client/components/home/home.component.css'],
  directives: [MdButton, MD_CARD_DIRECTIVES]
})

export class HomeComponent implements AfterViewInit {
  repos: string[];
  constructor(private elementRef: ElementRef) {
    this.repos = [
      'domfarolino/angular2-login-seed',
      'domfarolino/derbyhacks-hackathon',
      'domfarolino/directory-tree-print',
      'domfarolino/domfarolino'
    ];
  }
  
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}