import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouteReuseStrategy, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise(resolve =>
      this.authService.checkToken().then((x) => {
        this.authService.isUserAuthenticated().then(status => {
          let redirect: string = state.root.queryParams['redirect'];
          let blnUnSuthorize = false;

          // validation
          if (status === false)
            blnUnSuthorize = true;

          // redirect
          if (blnUnSuthorize && redirect != null && redirect.length > 0)
            this.router.navigate(["login", { redirect }]);
          else if (blnUnSuthorize)
            this.router.navigate(["login"])

          resolve(status);
        })
          .catch(() => {
            this.router.navigate(["login"]);
            resolve(false);
          })
      }))
  }
}