import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EyewearPage } from './eyewear.page';
import { EyewearComponent } from './eyewear.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: EyewearPage }])
  ],
  declarations: [EyewearPage, EyewearComponent]
})
export class EyewearPageModule {}
