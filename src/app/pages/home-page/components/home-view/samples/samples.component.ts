import { Component, Input, OnInit } from '@angular/core';
import { Isamples } from '../../../models/ihome';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  @Input() public samples?: Isamples[];
  constructor() { }

  ngOnInit(): void {
  }

}
