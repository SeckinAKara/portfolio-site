import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemComponent } from './poem/poem.component';

const routes: Routes = [
  {path: 'poems', component: PoemComponent},
  {path: 'poems/:name', component: PoemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
