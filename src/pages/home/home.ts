import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userName: string;

  constructor(public navCtrl: NavController,
              private angularFireAuth: AngularFireAuth,
              public navParams: NavParams
              ) {

  }

   ionViewDidLoad(){
     const userState = this.angularFireAuth.authState.subscribe( user => {
       if(user){
         this.userName = user.displayName;
         userState.unsubscribe();
       }
     })
   }

   sair(){
     this.angularFireAuth.auth.signOut();
     this.userName='';
     this.navCtrl.setRoot('BemvindoPage');

   }

  }
