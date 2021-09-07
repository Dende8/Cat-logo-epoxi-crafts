import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraftsViewComponent } from './components/crafts-view/crafts-view.component';

const routes: Routes = [
  { path: '', component: CraftsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CraftsPageRoutingModule { }
