import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MovimentoEstoquePage } from '../movimento-estoque/movimento-estoque';
import { EstoqueServiceProvider } from '../../providers/estoque-service/estoque-service';
/**
 * Generated class for the NovaMarcaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-marca',
  templateUrl: 'nova-marca.html',
})
export class NovaMarcaPage {

  @ViewChild('marca') marcaDigitada;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public estoqueServiceProvider: EstoqueServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaMarcaPage');
  }
  cadastrar(){
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
    toast.setMessage('Marca cadastrada com sucesso!');
    toast.present();
    this.navCtrl.setRoot(MovimentoEstoquePage);
    var marca = JSON.stringify({descricao: this.marcaDigitada.value, ativo: 1});
    this.estoqueServiceProvider.putMarca(marca);
    console.log(this.marcaDigitada.value);
  }

}
