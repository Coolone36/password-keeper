import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // Navigate to naked domain
    // this.router.navigate(["/"]);
  }

  signInWithRoseFire(): void{
    console.log("TODO: Signin with rose fire")
  }

  private authStateSubscription: Subscription;

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User)=> {
      if(user){
        //Sign in just happened
        console.log("User is signed in.");
        this.router.navigate(["/"]);
      } else {
        // signout occurred
        console.log("User is not signed in");
        
      }
    })
  }


}
