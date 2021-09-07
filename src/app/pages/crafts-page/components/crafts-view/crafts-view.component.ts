import { Component, OnInit } from '@angular/core';
import { Icrafts } from '../../models/icrafts';
import { IcraftsAPI } from '../../models/icraftsapi';
import { CraftsService } from '../../services/crafts.service';

@Component({
  selector: 'app-crafts-view',
  templateUrl: './crafts-view.component.html',
  styleUrls: ['./crafts-view.component.scss']
})
export class CraftsViewComponent implements OnInit {

  public craftsInfo: any;
  constructor(private readonly craftsService: CraftsService) { }

  ngOnInit(): void {
    this.getInfoCrafts();
  }

  public getInfoCrafts(): IcraftsAPI {
    this.craftsService.getCrafts().subscribe((data: any) => {
      this.craftsInfo = this.transformData(data);
    });

    return this.craftsInfo;
  }

  private transformData(data: any): Icrafts{
    return {
      gallery: data.gallery
    }
  }
}
