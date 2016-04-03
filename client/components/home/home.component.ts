import { Component } from 'angular2/core';
import { MdButton } from '@angular2-material/button';
import { MdCard } from '@angular2-material/card';

@Component({
  selector: 'home',
  templateUrl: 'client/components/home/home.component.html',
  styleUrls: ['client/components/home/home.component.css'],
  directives: [MdButton, MdCard]
})

export class HomeComponent{
  
  constructor() {
  }
}