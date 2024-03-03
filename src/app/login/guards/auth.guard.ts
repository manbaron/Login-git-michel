import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "../services/login.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private  router:Router,
                private auth:LoginService){}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean   {
        let test = this.auth.getToken()
        console.log(test)

        if (test){
            return true
        }else{
            return false
        }
        // const token = this.auth.getToken()
        // if(token){
        //     return true;
        // }else{
        //     this.router.navigateByUrl('');
        //     return false
        // }
    }
}