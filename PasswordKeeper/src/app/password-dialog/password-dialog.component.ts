import { Component, OnInit } from '@angular/core';
import { Password } from '../models/password.model';
import { MatDialogRef } from '@angular/material';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import * as firebase from 'firebase/app';

interface PasswordDialogData {
  firebasePath: string;
}

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent implements OnInit {

  formPassword: Password;

  constructor(private dialogRef: MatDialogRef<PasswordDialogComponent>, @Inject(MAT_DIALOG_DATA) private dialogData: PasswordDialogData) {
    this.formPassword = new Password();
    console.log(dialogData);
  }

  ngOnInit() {
  }

  onSubmit(){
    try{

    
    console.log("Submit and save form: ", this.formPassword);
    firebase.database().ref(this.dialogData.firebasePath).push(this.formPassword);
    this.dialogRef.close();
    } catch(e) {
      console.error("Submit error", e);
    }
  }

}
