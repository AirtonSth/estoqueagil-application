import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoresProdutoPage } from './cores-produto';

@NgModule({
  declarations: [
    CoresProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CoresProdutoPage),
  ],
})
export class CoresProdutoPageModule {}
