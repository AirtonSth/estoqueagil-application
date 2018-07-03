import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MovimentoEstoquePage } from '../movimento-estoque/movimento-estoque';
import { EstoqueServiceProvider } from '../../providers/estoque-service/estoque-service';

/**
 * Generated class for the NovoModeloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-modelo',
  templateUrl: 'novo-modelo.html',
})
export class NovoModeloPage {

  marcaProduto: String;
  @ViewChild('modelo') modeloDigitada;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController, 
    public estoqueServiceProvider: EstoqueServiceProvider) {
  }
  
  ionViewWillEnter() {
    this.marcaProduto = this.navParams.get('nomeMarca');
  }

  cadastrar(){
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
    toast.setMessage('Modelo cadastrado com sucesso!');
    toast.present();
    this.navCtrl.setRoot(MovimentoEstoquePage);   
    console.log(this.modeloDigitada.value);
  }
}
