import { NgModule } from '@angular/core';
import { JuvigComponent } from './juvig.component';
import { JuvigImagePasterComponent } from './juvig-image-paster/juvig-image-paster.component';



@NgModule({
  declarations: [
    JuvigComponent,
    JuvigImagePasterComponent
  ],
  imports: [
  ],
  exports: [
    JuvigComponent
  ]
})
export class JuvigModule { }
