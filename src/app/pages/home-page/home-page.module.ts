//MODULOS ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

//ROUTING
import { HomePageRoutingModule } from './home-page-routing.module';
//COMPONENTES
import { HomeViewComponent } from './components/home-view/home-view.component';
import { HeroComponent } from './components/home-view/hero/hero.component';
import { SamplesComponent } from './components/home-view/samples/samples.component';
//SERVICIOS
import { HomeService } from './services/home.service';


@NgModule({
  declarations: [
    HomeViewComponent,
    HeroComponent,
    SamplesComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  providers: [HomeService]
})
export class HomePageModule { }
