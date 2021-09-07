import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ihero } from '../../../models/ihome';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() public hero?: Ihero;
  constructor() { }

  ngOnInit(): void {
  }

}
