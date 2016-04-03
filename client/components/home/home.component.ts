import { Component } from 'angular2/core';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'home',
  templateUrl: 'client/components/home/home.component.html',
  styleUrls: ['client/components/home/home.component.css'],
  directives: [MdButton, MD_CARD_DIRECTIVES]
})

export class HomeComponent{
  
  constructor() {
  }
}