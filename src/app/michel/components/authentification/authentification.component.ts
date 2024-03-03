import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {
  constructor(private router:Router){}

  return(){
     this.router.navigateByUrl('')
  }
}
