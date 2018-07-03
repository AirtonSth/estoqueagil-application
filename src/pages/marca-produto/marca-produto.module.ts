import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarcaProdutoPage } from './marca-produto';

@NgModule({
  declarations: [
    MarcaProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(MarcaProdutoPage),
  ],
})
export class MarcaProdutoPageModule {}
