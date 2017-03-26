import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {User, blisusers, cmsusers} from "./login.service";

@Injectable()
export default class loginAuthorization implements CanActivate {

    public user = new User('','');
    public portal = 'blis';

    constructor(private _router: Router){

    }
    canActivate(){
        console.log('Login Guard called');

        if(this.portal == 'blis'){
            var authenticatedUser =  blisusers.find(u => u.username === this.user.username);
            if (authenticatedUser && authenticatedUser.password === this.user.password){
                localStorage.setItem("user", JSON.stringify(authenticatedUser));
                return true;
            }
            alert('Login Denied!');
            return false;
        }
        else if(this.portal == 'cms'){
            var authenticatedUser = cmsusers.find(u => u.username === this.user.username);
            if (authenticatedUser && authenticatedUser.password === this.user.password){
                localStorage.setItem("user", JSON.stringify(authenticatedUser));
                return true;
            }
            alert('Login Denied!');
            return false;
        }
    }

    sendValue(user,portal){
        this.user = user;
        this.portal = portal;
    }



}