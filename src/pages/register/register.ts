import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MovimentoEstoquePage } from '../movimento-estoque/movimento-estoque';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: AngularFireAuth, public toastc: ToastController) {
  }

  registrar(){
    let toast = this.toastc.create({duration: 3000, position: 'bottom'});

    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then(data=>{
      console.log('dataaa', data);
      toast.setMessage('usuario criado com sucesso');
      toast.present();
      this.navCtrl.setRoot(MovimentoEstoquePage);
    }).catch((error: any) =>{
      if(error.code == 'auth/email-already-in-use'){
        toast.setMessage('Email digitado já está em uso');
      } else if(error.code == 'auth/invalid-email'){
        toast.setMessage('Email digitado está inválido');
      } else if(error.code == 'auth/operation-not-allowed'){
        toast.setMessage('Não está habilitado para criar usuários');
      } else if(error.code == 'auth/weak-password'){
        toast.setMessage('Senha digitada é muito fraca');
      }
      toast.present();
    });
  }
}
