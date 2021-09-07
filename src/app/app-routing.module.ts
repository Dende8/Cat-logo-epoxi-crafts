import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then((module) => module.HomePageModule)
  },
  {
    path: 'crafts',
    loadChildren: () => import('./pages/crafts-page/crafts-page.module').then((module) => module.CraftsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
