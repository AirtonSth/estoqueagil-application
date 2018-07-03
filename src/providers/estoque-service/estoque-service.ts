import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class EstoqueServiceProvider {

  constructor(public http: Http) {}

  getMarcas(){
    return this.http.get('/api/marcas/')
    .map(res=> res.json());
  }

  getModeloPorIdMarca(idMarca){
    return this.http.get('/api/modelos/por-id-marca/'+idMarca)
    .map(res => res.json());
  }

  getCores(){
    return this.http.get('/api/cores/')
    .map(res => res.json());
  }
  getCoresDisponiveis(idModelo, idTipoProduto){
    return this.http.get('/api/cores/cores-disponiveis-por-id-modelo/'+idModelo+'/e-id-tipo-produto/'+idTipoProduto)
    .map(res => res.json());
  }
  getModelosDisponiveis(idMarca, idTipoProduto){
    return this.http.get('/api/modelos/disponivel-por-id-marca/'+idMarca+'/e-id-tipo-produto/'+idTipoProduto)
    .map(res => res.json());
  }
  putMarca(marca){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let retorno = this.http.post('/api/marcas/salvar', marca, {headers: headers});
    retorno.subscribe(data=>{
      console.log(data);
    });
  }

}
