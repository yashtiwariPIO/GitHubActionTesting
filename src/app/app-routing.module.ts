import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcompComponent } from './newcomp/newcomp.component';

const routes: Routes = [
  {path:"newcomp" , component: NewcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
