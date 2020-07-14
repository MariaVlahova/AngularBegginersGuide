import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutingComponent} from './Routing/routing.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
  {path: 'rout', component: RoutingComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
