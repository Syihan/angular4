import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturetogglerService {

  private _photoLinks: string[] = [
    'https://www.nasa.gov/sites/default/files/cygx1_ill.jpg',
    'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/05/star_black_hole.jpg?itok=gXoumeFr&fc=50,50',
    'https://www.nasa.gov/sites/default/files/blackhole_2.jpg'
  ];

  constructor() { }

  get photoLinks() {
    return this._photoLinks;
  }
}
