import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {


  private authStateSubscription: Subscription;

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User)=> {
      if(user){
        //Sign in just happened
        console.log("User is signed in: " + user.uid);
      } else {
        // signout occurred
        console.log("User is not signed in");
        this.router.navigate(["/signin"]);
      }
    })
  }

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

}
