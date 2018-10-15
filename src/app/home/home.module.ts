import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { EyewearPage } from '../eyewear/eyewear.page'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
    { path: '', component: HomePage },
    { path: 'eyewear/:id', component: EyewearPage }
  ])
  ],
  declarations: [HomePage,EyewearPage]
})
export class HomePageModule {}
