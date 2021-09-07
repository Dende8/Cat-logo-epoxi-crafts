import { Component, Input, OnInit } from '@angular/core';
import { Igallery } from '../../../models/icrafts';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() public gallery?: Igallery[];
  constructor() { }

  ngOnInit(): void {
  }

}
