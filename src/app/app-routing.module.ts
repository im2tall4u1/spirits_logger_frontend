import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddSpiritComponent } from './addspirit/addspirit.component';
import { SpiritsComponent } from './spirits/spirits.component';

const routes: Routes = [
  {path:"spirits", component: SpiritsComponent},
  {path:"about", component: AboutComponent},
  {path:"addspirit", component: AddSpiritComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
