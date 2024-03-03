import { Injectable } from "@angular/core";
import { Router } from '@angular/router';




@Injectable({
    providedIn: 'root'
})
export class LoginService{
  constructor(private router:Router){}


    private token!:string;
    //sauvegarde du token
    savetoken(token : string):void{
        localStorage.setItem('token',token)
        this.router.navigateByUrl('/authentification')

    }
      

    login(user: string , pass:string){
        // this.token = 'M';
        // localStorage.setItem('token',this.token)
        if(user == "admin" && pass == "Passeword@1"){
            this.router.navigateByUrl('/authentification');
        }else{
            console.log("passeword ou mot de passe incorrect")
            this.router.navigateByUrl('');
        }
        
    }
    //verifie le token
    getToken(): boolean{
     const token =localStorage.getItem('token')
    //  console.log(token)
        return !!token;
    }


    

    // public isAuthentificated() : boolean{
    //     const token = localStorage.getItem('michel');
        
        
    // }

}