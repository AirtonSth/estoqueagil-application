import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http'; 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MovimentoEstoquePage } from '../pages/movimento-estoque/movimento-estoque';
import { MarcaProdutoPage } from '../pages/marca-produto/marca-produto';
import { ModeloProdutoPage } from '../pages/modelo-produto/modelo-produto';
import { CoresProdutoPage } from '../pages/cores-produto/cores-produto';
import { CoresDisponiveisPage } from '../pages/cores-disponiveis/cores-disponiveis';
import { NovoModeloPage } from '../pages/novo-modelo/novo-modelo';
import { NovaMarcaPage } from '../pages/nova-marca/nova-marca';
import { NovaCorPage } from '../pages/nova-cor/nova-cor';
import { DestaquePage } from '../pages/destaque/destaque';
import { RecuperarPage } from '../pages/recuperar/recuperar';
import { EstoqueServiceProvider } from '../providers/estoque-service/estoque-service';

const fireBaseAuth = {
  apiKey: "AIzaSyAt-hwaGbORIY0I3Gbyfwdi9ujGgVsrMTI",
  authDomain: "estoqueagil.firebaseapp.com",
  databaseURL: "https://estoqueagil.firebaseio.com",
  projectId: "estoqueagil",
  storageBucket: "estoqueagil.appspot.com",
  messagingSenderId: "796769321363"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MovimentoEstoquePage,
    MarcaProdutoPage,
    ModeloProdutoPage,
    CoresProdutoPage,
    CoresDisponiveisPage,
    NovoModeloPage,
    NovaMarcaPage,
    NovaCorPage,
    RecuperarPage,
    DestaquePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseAuth), // imports firebase/app needed for everything
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MovimentoEstoquePage,
    MarcaProdutoPage,
    ModeloProdutoPage,
    CoresProdutoPage,
    CoresDisponiveisPage,
    NovoModeloPage,
    NovaMarcaPage,
    NovaCorPage,
    RecuperarPage,
    DestaquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EstoqueServiceProvider
  ]
})
export class AppModule {}
