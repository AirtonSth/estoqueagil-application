import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DestaquePage } from './destaque';

@NgModule({
  declarations: [
    DestaquePage,
  ],
  imports: [
    IonicPageModule.forChild(DestaquePage),
  ],
})
export class DestaquePageModule {}
