//MODULOS ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//ROUTING
import { CraftsPageRoutingModule } from './crafts-page-routing.module';

//COMPONENTES
import { CraftsViewComponent } from './components/crafts-view/crafts-view.component';
import { GalleryComponent } from './components/crafts-view/gallery/gallery.component';
//SERVICIOS
import { CraftsService } from './services/crafts.service';


@NgModule({
  declarations: [
    CraftsViewComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    CraftsPageRoutingModule,
    HttpClientModule
  ],
  providers: [CraftsService]
})
export class CraftsPageModule { }
