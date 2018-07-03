import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RecuperarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html',
})
export class RecuperarPage {

  @ViewChild('email') emailDigitado;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public angularFireAuth: AngularFireAuth) {
  }

  recuperar(){
    let toast = this.toastCtrl.create({duration: 2000, position: 'bottom'});
    
    this.angularFireAuth.auth.sendPasswordResetEmail(this.emailDigitado.value)
    .then(()=>{
      this.navCtrl.pop();
      toast.setMessage("Foi enviado ao seu email um link para redefinir sua senha :)");
      toast.present();
    })
    .catch((error: any)=>{
     if(error.code == 'auth/invalid-email'){
       toast.setMessage('Email digitado está inválido');
     } else if(error.code == 'auth/user-not-found'){
       toast.setMessage('Usuário não encontrado');
     }
    });
  
  
  }

}
