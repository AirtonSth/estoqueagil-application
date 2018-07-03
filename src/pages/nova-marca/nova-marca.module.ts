import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaMarcaPage } from './nova-marca';

@NgModule({
  declarations: [
    NovaMarcaPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaMarcaPage),
  ],
})
export class NovaMarcaPageModule {}
