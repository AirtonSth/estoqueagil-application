import { Component,ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Users } from './users';
import { RegisterPage } from '../register/register';
import { MovimentoEstoquePage } from '../movimento-estoque/movimento-estoque';
import { RecuperarPage } from '../recuperar/recuperar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    users: Users = new Users();
    @ViewChild('usuario') email;
    @ViewChild('senha') password;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public fire: AngularFireAuth) {

  }

  entrar(){
    
    /*this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(data =>{
      console.log('dataa', data);
      this.users.email = this.email.value;
      this.users.senha = this.password.value;
      this.navCtrl.setRoot(MovimentoEstoquePage);
    }).catch((error: any)=>{
      if(error.code == 'auth/invalid-email'){
        toast.setMessage('Email digitado está inválido');
      } else if(error.code == 'auth/user-disabled'){
        toast.setMessage('Email digitado está inativo');
      } else if(error.code == 'auth/user-not-found'){
        toast.setMessage('Usuário não encontrado');
      } else if(error.code == 'auth/wrong-password'){
        toast.setMessage('Senha digitada está inválida');
      }
      toast.present();
    });*/

    this.navCtrl.setRoot(MovimentoEstoquePage);
  }

  cadastrar(){
    this.navCtrl.push(RegisterPage);
  }
  recuperar(){
    this.navCtrl.push(RecuperarPage);
  }
}
