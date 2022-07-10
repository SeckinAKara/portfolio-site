import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemListComponent } from './poem-list/poem-list.component';

const routes: Routes = [
  {
    path: 'poems/', 
    component: PoemListComponent
  },
  {
    path: 'poems/:title', 
    component: PoemListComponent
  },
  {
    path: 'poems', 
    redirectTo: 'poems/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
