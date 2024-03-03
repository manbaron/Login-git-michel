import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent  implements OnInit{

  constructor(private formbuilder: FormBuilder, 
              private auth:LoginService,
              ){}

  mainform!: FormGroup;
  urlpassword!:RegExp;
  
 ngOnInit(): void {
  this.urlpassword =/([A-Z]?[a-z]{0,1000}[@?!£])/
    // this.initMainForm();
    this.mainform = this.formbuilder.group({
      userName:['',[Validators.required]],
      passeWord:['',[Validators.required,Validators.minLength(8),Validators.pattern(this.urlpassword)]]
    
      
    });

    
    
  }

  onSubmit(){
    const user = this.mainform.get('userName')?.value;
    const pass= this.mainform.get('passeWord')?.value;
     this.auth.login( user , pass);
      
    
    console.log(this.mainform.value);
  }

  // private initMainForm():void {
  //   this.mainform = this.formbuilder.group({
  //   })
    

  // }

  

  

  // private initFormControls():void {
  //   this.personalInfoForm = this.formbuilder.group({
  //     userName:['', Validators.required],
  //     passWord:['',Validators.required],
  //   })

  // }
  
}
