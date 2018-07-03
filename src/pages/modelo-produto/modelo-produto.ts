import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EstoqueServiceProvider } from '../../providers/estoque-service/estoque-service';
import { CoresProdutoPage } from '../cores-produto/cores-produto';
import { CoresDisponiveisPage } from '../cores-disponiveis/cores-disponiveis';

import { NovoModeloPage } from '../novo-modelo/novo-modelo';
/**
 * Generated class for the ModeloProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modelo-produto',
  templateUrl: 'modelo-produto.html',
})
export class ModeloProdutoPage {
  tipoProduto: String;
  tipoOperacao: String;
  idMarcaProduto: String;
  nomeMarcaProduto: String;
  modelos:  Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, 
    public loadingCtrl:  LoadingController, 
    public navParams: NavParams, 
    public estoqueServiceProvider: EstoqueServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModeloProdutoPage');
  }
  ionViewWillEnter(){
    this.modelos = new Array<any>();
    this.tipoProduto = this.navParams.get('tipoProdutoSelecionado');
    this.tipoOperacao = this.navParams.get('tipoOperacaoSelecionada');
    this.idMarcaProduto = this.navParams.get('idMarcaSelecionada');
    this.nomeMarcaProduto = this.navParams.get('nomeMarcaSelecionada');
    const operacaoSelecionada = this.tipoOperacao;
    if (operacaoSelecionada == '0'){
      let loading = this.loadingCtrl.create();
      loading.present();    
      this.estoqueServiceProvider.getModeloPorIdMarca(this.idMarcaProduto)
      .subscribe(data=>{
        console.log('dados dos modelos', data);
        for(let modelo of data){
          this.modelos.push(modelo);
        }
        loading.dismiss();
      });
    } else if (operacaoSelecionada == '1'){
      let loading = this.loadingCtrl.create();
      loading.present();    
      this.estoqueServiceProvider.getModelosDisponiveis(this.idMarcaProduto, this.tipoProduto)
      .subscribe(data=>{
        console.log('dados dos modelos', data);
        for(let modelo of data){
          this.modelos.push(modelo);
        }
        loading.dismiss();
      });
    }
  }
  modeloSelecionado(value){
    const tipoProdutoSelecionado = this.tipoProduto;
    const tipoOperacaoSelecionada = this.tipoOperacao;
    const modeloProdutoSelecionado = value;
    console.log(modeloProdutoSelecionado);
    if (tipoOperacaoSelecionada == '0'){
      console.log('0 - entrada - todos');
      this.navCtrl.push(CoresProdutoPage, {tipoProdutoSelecionado, tipoOperacaoSelecionada,modeloProdutoSelecionado});
    } else if (tipoOperacaoSelecionada == '1'){
      console.log('1 - saida - disponiveis');
      this.navCtrl.push(CoresDisponiveisPage, {tipoProdutoSelecionado, tipoOperacaoSelecionada,modeloProdutoSelecionado});
    }
  }
  
  novoModelo(){
    const nomeMarca = this.nomeMarcaProduto;
    this.navCtrl.push(NovoModeloPage, {nomeMarca});
  }
}
