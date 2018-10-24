import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'eyewear/:id', loadChildren: './eyewear/eyewear.module#EyewearPageModule' },
  { path: '**', loadChildren: './home/home.module#HomePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
