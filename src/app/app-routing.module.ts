import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
