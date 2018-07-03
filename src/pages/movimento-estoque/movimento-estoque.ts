import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { MarcaProdutoPage } from '../marca-produto/marca-produto';
import { DestaquePage } from '../destaque/destaque';
import { EstoqueServiceProvider } from '../../providers/estoque-service/estoque-service';
/**
 * Generated class for the MovimentoEstoquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movimento-estoque',
  templateUrl: 'movimento-estoque.html',
})
export class MovimentoEstoquePage {

  tipoProduto: string;
  email: string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    public fire: AngularFireAuth, 
    public toastc: ToastController,
    public loadingCtrl:  LoadingController,
    public estoqueServiceProvider: EstoqueServiceProvider) {
    //this.email = this.fire.auth.currentUser.email;
  }

  ionViewWillEnter(){
    this.tipoProduto = "1";//como padrão o checkbox de tipo de produto vem checkado como capinha
  }
  logout(){
    let toast = this.toastc.create({duration: 3000, position: 'bottom'});
    this.fire.auth.signOut();
    toast.setMessage('deslogado');
    toast.present();
    this.navCtrl.setRoot(HomePage);
    //descomentar app.component.ts e home.ts
  }
  adicionar(){
    const tipoProdutoSelecionado = this.tipoProduto;
    const tipoOperacaoSelecionada = 0; //opera entrada
    this.navCtrl.push(MarcaProdutoPage, {tipoProdutoSelecionado, tipoOperacaoSelecionada});
  }
  remover(){
    const tipoProdutoSelecionado = this.tipoProduto;
    const tipoOperacaoSelecionada = 1; //opera saída
    this.navCtrl.push(MarcaProdutoPage, {tipoProdutoSelecionado, tipoOperacaoSelecionada});
    
  }
  selecionarTipoProduto(valorTipoProduto){
    this.tipoProduto = valorTipoProduto;
  }
  destaque(){
    this.navCtrl.push(DestaquePage);
  }
}
