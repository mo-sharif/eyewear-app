import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog.component';
import {Camera} from '@ionic-native/camera';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
    { path: '', component: BlogComponent }
  ])
  ],
  providers: [Camera],
  declarations: [BlogComponent]
})
export class BlogPageModule {}
