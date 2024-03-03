import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login/components/login-component/login-component.component';
import { AuthentificationComponent } from './michel/components/authentification/authentification.component';
import { AuthGuard } from './login/guards/auth.guard';

const routes: Routes = [
  {path:'authentification', component:AuthentificationComponent,canActivate:[AuthGuard]},
  {path: '',component:LoginComponentComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
