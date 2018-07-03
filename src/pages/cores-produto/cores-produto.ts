import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { MovimentoEstoquePage } from '../movimento-estoque/movimento-estoque';
import { EstoqueServiceProvider } from '../../providers/estoque-service/estoque-service';
import { NovaCorPage } from '../nova-cor/nova-cor';

/**
 * Generated class for the CoresProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cores-produto',
  templateUrl: 'cores-produto.html',
})
export class CoresProdutoPage {

  tipoProduto: String;
  tipoOperacao: String;
  modeloProduto: String;
  cores:  Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, 
    public loadingCtrl:  LoadingController, 
    public navParams: NavParams,
    public toastc: ToastController,
    public estoqueServiceProvider: EstoqueServiceProvider) {
  }

  ionViewWillEnter() {
    this.tipoProduto = this.navParams.get('tipoProdutoSelecionado');
    this.tipoOperacao = this.navParams.get('tipoOperacaoSelecionada');
    this.modeloProduto = this.navParams.get('modeloProdutoSelecionado');
    console.log('tipo produto', this.tipoProduto);
    console.log('tipo operacao', this.tipoOperacao);
    console.log('modelo produto', this.modeloProduto);

    let loading = this.loadingCtrl.create();
    loading.present();    
    this.estoqueServiceProvider.getCores()
    .subscribe(data=>{
      console.log('dados das cores', data);
      for(let cor of data){
        this.cores.push(cor);
      }
      loading.dismiss();
    });    
  }

  incluirProduto(id){
    console.log(id);
    let toast = this.toastc.create({duration: 3000, position: 'bottom'});
    toast.setMessage('Operação realizada com sucesso!');
    toast.present();
    this.navCtrl.setRoot(MovimentoEstoquePage);
  }

  novaCor(){
    this.navCtrl.push(NovaCorPage);
  }

}
