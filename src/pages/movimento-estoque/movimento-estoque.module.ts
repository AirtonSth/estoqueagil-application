import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovimentoEstoquePage } from './movimento-estoque';

@NgModule({
  declarations: [
    MovimentoEstoquePage,
  ],
  imports: [
    IonicPageModule.forChild(MovimentoEstoquePage),
  ],
})
export class MovimentoEstoquePageModule {}
