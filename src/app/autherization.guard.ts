import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherizationGuard implements CanActivate {
  constructor(private router:Router, private toaster:ToastrService){}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token=localStorage.getItem('token');
   

      if(token)
      {
  
        if(state.url.indexOf('admin')>=0)
        {
          let user : any =localStorage.getItem('user');
          user=JSON.parse(user);
          if(user.role=='Admin')
          {
             this.toaster.success('Welcome on Admin Dashbord')
          return true;
          }
         else {
          this.toaster.warning('this page for Admin');
          this.router.navigate(['../../']);
          return false;
         }
        }
        console.log(state);
  
        
        return true;
      }
      else {
        this.router.navigate(['../../security/login']);
        this.toaster.warning('You are not Autherized');
        return false;
      }
    }
}
