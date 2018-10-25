import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(public usuario: UsuarioService) {}
  canActivate() {
      if (this.usuario.logueado()) {
        console.log('paso el guard');
      } else {
        console.log('bloqueado por guard');
      }
    return true;
  }
}
