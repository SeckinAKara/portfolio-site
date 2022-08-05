import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PoemComponent } from './poem/poem.component';

const routes: Routes = [
  {
    path: 'poems/:title', 
    component: PoemComponent
  },
  {
    path: 'poems/*', 
    redirectTo: 'poems/index'
  },
  {
    path: '*/*',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
