import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  private authStateSubscription: Subscription;
  showSignOut = false;

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User)=> {
      if(user){
        //Sign in just happened
        this.showSignOut = true;
        console.log("Sign in finished");
      } else {
        // signout occurred
        this.showSignOut = false;
        console.log("Sign out finished");
      }
    })
  }

  constructor(public afAuth: AngularFireAuth) {
  }
  

  logout(){
    this.afAuth.auth.signOut();
  }

  signOut(): void {
    console.log('TODO: Add the signOut code.')
  }
}
