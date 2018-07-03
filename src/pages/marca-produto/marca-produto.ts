import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EstoqueServiceProvider } from '../../providers/estoque-service/estoque-service'
import { ModeloProdutoPage } from '../modelo-produto/modelo-produto';
import { NovaMarcaPage } from '../nova-marca/nova-marca';
/**
 * Generated class for the MarcaProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marca-produto',
  templateUrl: 'marca-produto.html',
})
export class MarcaProdutoPage {

  tipoProduto: String;
  tipoOperacao: String;
  marcas:  Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl:  LoadingController,
              public estoqueServiceProvider: EstoqueServiceProvider) {
  }

  ionViewWillEnter(){
    this.marcas = new Array<any>();
    this.tipoProduto = this.navParams.get('tipoProdutoSelecionado');
    this.tipoOperacao = this.navParams.get('tipoOperacaoSelecionada');

    console.log('tipo produto', this.tipoProduto);
    console.log('tipo operacao', this.tipoOperacao);
    let loading = this.loadingCtrl.create();
    loading.present();    
    this.estoqueServiceProvider.getMarcas()
    .subscribe(data=>{
      console.log('dados das marcas', data);
      for(let marca of data){
        this.marcas.push(marca);
      }
      loading.dismiss();
    });
  }
  marcaSelecionada(id, descricao){
    const tipoProdutoSelecionado = this.tipoProduto;
    const tipoOperacaoSelecionada = this.tipoOperacao;
    const idMarcaSelecionada = id;
    const nomeMarcaSelecionada = descricao;
    this.navCtrl.push(ModeloProdutoPage, {tipoProdutoSelecionado, tipoOperacaoSelecionada, idMarcaSelecionada, nomeMarcaSelecionada});
  }

  novaMarca(){
    this.navCtrl.push(NovaMarcaPage);
  }
}
