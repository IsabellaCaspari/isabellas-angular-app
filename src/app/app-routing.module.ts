import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';


const routes: Routes = [
  {path: 'start', component: StartPageComponent},
  { path: '', redirectTo: 'start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
