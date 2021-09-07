import { Component, OnInit } from '@angular/core';
import { Ihome } from '../../models/ihome';
import { IhomeAPI } from '../../models/ihomeapi';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public homeInfo: any;
  constructor(private readonly homeService: HomeService) { }

  ngOnInit(): void {
    this.getInfoHome();
    
   }

  public getInfoHome(): IhomeAPI {
    this.homeService.getHome().subscribe((data: any) => {
      this.homeInfo = this.transformData(data);
    });
    
    return this.homeInfo;
  }
  
  private transformData(data: any): Ihome{
    return {
      hero: data.hero,
      samples: data.samples
    }
  }
}
