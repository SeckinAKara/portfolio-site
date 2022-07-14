import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemListComponent } from './poem-list/poem-list.component';

const routes: Routes = [
  {
    path: 'poems/:title', 
    component: PoemListComponent
  },
  {
    path: 'poems/undefined', 
    redirectTo: 'poems/index'
  },
  {
    path: 'poems/', 
    redirectTo: 'poems/index'
  },
  {
    path: 'poems', 
    redirectTo: 'poems/index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
