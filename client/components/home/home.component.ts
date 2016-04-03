import { Component } from 'angular2/core';
import { MdButton } from '@angular2-material/button';

@Component({
  selector: 'home',
  templateUrl: 'client/components/home/home.component.html',
  styleUrls: ['client/components/home/home.component.css'],
  directives: [MdButton]
})

export class HomeComponent{
  
  constructor() {
  }
}