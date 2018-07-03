import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MovimentoEstoquePage } from '../movimento-estoque/movimento-estoque';
import { EstoqueServiceProvider } from '../../providers/estoque-service/estoque-service';

/**
 * Generated class for the NovaCorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-cor',
  templateUrl: 'nova-cor.html',
})
export class NovaCorPage {

  @ViewChild('cor') corDigitada;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public estoqueServiceProvider: EstoqueServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaCorPage');
  }
  cadastrar(){
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
    toast.setMessage('Cor cadastrada com sucesso!');
    toast.present();
    this.navCtrl.setRoot(MovimentoEstoquePage);   
    console.log(this.corDigitada.value);
  }
}
