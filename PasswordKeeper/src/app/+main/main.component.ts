import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Password } from "../models/password.model";
import { Observable } from 'rxjs/Observable';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {


  private authStateSubscription: Subscription;
  private passwordStream: AngularFireList<Password[]>;
  public passwordData: Observable<any[]>;
  private firebasePath: String;

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User)=> {
      if(user){
        //Sign in just happened
        console.log("User is signed in: " + user.uid);
        this.firebasePath=`/users/${user.uid}`;
        this.passwordStream = this.db.list(`/users/${user.uid}`);
        this.passwordData = this.passwordStream.valueChanges();
      } else {
        // signout occurred
        console.log("User is not signed in");
        this.router.navigate(["/signin"]);
      }
    })
  }

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router, public dialog: MatDialog) {
  }

  showPasswordDialog(): void {
    console.log("showing dialog msg");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {firebasePath: this.firebasePath};

    this.dialog.open(PasswordDialogComponent, dialogConfig);
  }

}
