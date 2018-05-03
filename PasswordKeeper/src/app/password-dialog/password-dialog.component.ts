import { Component, OnInit } from '@angular/core';
import { Password } from '../models/password.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss']
})
export class PasswordDialogComponent implements OnInit {

  formPassword: Password;

  constructor(private dialogRef: MatDialogRef<PasswordDialogComponent>) {
    this.formPassword = new Password();
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Submit and save form: ", this.formPassword);
    
    this.dialogRef.close();
  }

}
