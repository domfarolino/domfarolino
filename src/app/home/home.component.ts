import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  repos: string[];
  constructor(private elementRef: ElementRef) {
    this.repos = [
      'domfarolino/angular2-login-seed',
      'domfarolino/push-notifications',
      'domfarolino/derbyhacks-hackathon',
      'domfarolino/blog',
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
