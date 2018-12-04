import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items;

  constructor(items: ItemsService) {
    this.items = items.getItems();
  }

  ngOnInit() {
  }

}
