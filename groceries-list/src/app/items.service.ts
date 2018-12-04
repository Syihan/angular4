import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items = ['eggs', 'milk', 'bread', 'chicken wings', 'paprika', 'breading'];
  constructor() { }

  getItems() {
    return this.items;
  }
}
