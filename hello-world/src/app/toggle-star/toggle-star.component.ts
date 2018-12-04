import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-star',
  templateUrl: './toggle-star.component.html',
  styleUrls: ['./toggle-star.component.css']
})
export class ToggleStarComponent implements OnInit {
  isSelected: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
