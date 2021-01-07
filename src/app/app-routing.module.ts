import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [{
  path:'', component:ContentComponent, children:[{
    path:'', loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
