import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { MaterialModule } from './material.module';
import {  ReactiveFormsModule } from '@angular/forms';
// import { LoginRoutingModule } from './login.routing.module';


@NgModule({
  
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    // LoginRoutingModule
  ],
  exports:[
    MaterialModule,
    ReactiveFormsModule
  

  ]
})
export class LoginModule  { 



  
}

