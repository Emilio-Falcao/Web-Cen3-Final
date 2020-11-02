import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 route: any;


 constructor(private router: Router){}
 
 canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  if (localStorage.getItem('token') != null)
    return true;
  else {
    this.route.navigate(['/login']);
    return false;
  }

}
  
}
