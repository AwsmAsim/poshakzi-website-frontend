import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { emailOrPhoneNumberValidator } from '../custom_validator/email_or_phone_number_validator';
import { passwordValidator } from '../custom_validator/password_validator';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit{

  loggedIn: boolean = false;
  logInScreen: boolean = false;
  loading: boolean = false;

  registerForm!: FormGroup;
  loginForm!: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<AuthenticationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder 
  ){

  }


  onOtpChange(event: any) {
    // Handle the OTP change here
    console.log('OTP Changed:', event);
    // You can perform any other logic or update your model based on the OTP change
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      mobileNumber: ["", [Validators.required, Validators.pattern('[0-9]{10}')]],

      emailAddress: ["", [Validators.email]],

      firstName: ["", Validators.required],
      lastName: ["", [Validators.required]],


      gender: ["", [Validators.required]],

      password: ["", [Validators.required]],
      confirmPassword: ["", Validators.required],

      pincode: ["", [Validators.required]],
      addressLine1: ["", [Validators.required]],
      addressLine2: [""]
      
    });

    this.loginForm = this.formBuilder.group({
      identifier: ['', [Validators.required, emailOrPhoneNumberValidator()]],
      password: ['', [Validators.required, passwordValidator()]],
    });

  }



  closeDialog(){
    this.dialogRef.close();
  }





}
