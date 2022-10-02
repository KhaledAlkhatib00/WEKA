import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private router:Router, private toaster:ToastrService){}


  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token=localStorage.getItem('token');
   

      if(token)
      {
  
       
        let user : any =localStorage.getItem('user');
        user=JSON.parse(user);
        if(user.groupsid=="102")
        {
          this.toaster.warning('You are not Logged In');
          return false;
        }
        
        return true;
      }
      else {
        this.router.navigate(['../../security/login']);
        this.toaster.warning('You are not Logged In');
        return false;
      }
    }
  
}