import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponentComponent } from './login/components/login-component/login-component.component';
import { AuthentificationComponent } from './michel/components/authentification/authentification.component';

import { LoginModule } from './login/login.module';
// import { LoginRoutingModule } from './login/login.routing.module';
import { MichelModule } from './michel/michel.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    LoginComponentComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    // LoginRoutingModule,
    MichelModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
