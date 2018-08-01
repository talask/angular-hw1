import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brand: string = "My first project an Angular";
  myName: string = "Skyrda Natalya";
  constructor() { }

  ngOnInit() {
  }

}
