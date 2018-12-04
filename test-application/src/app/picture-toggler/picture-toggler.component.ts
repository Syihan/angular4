import { Component, OnInit } from '@angular/core';
import { PicturetogglerService } from '../picturetoggler.service';

@Component({
  selector: 'app-picture-toggler',
  templateUrl: './picture-toggler.component.html',
  styleUrls: ['./picture-toggler.component.css']
})
export class PictureTogglerComponent implements OnInit {

  photos: string[];
  selectedPhoto: string;
  isHidden: boolean;

  constructor(picturetoggler?: PicturetogglerService) {
    this.photos = picturetoggler.photoLinks;
    this.isHidden = true;
    this.selectedPhoto = '';
  }

  ngOnInit() {
  }

  getCondensed(photo: string) {
    return '...' + photo.substring(photo.length - 20);
  }

  showImage(photo: string) {
    this.selectedPhoto = photo;
    this.isHidden = false;
  }

  hideImage() {
    this.isHidden = true;
  }
}
