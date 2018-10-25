import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import {Usuario} from 'src/app/models/usuario.models';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;
  token: String;
  constructor(
    public http: HttpClient,
    public router: Router
  ) {


  }
  logout() {
    this.usuario = null;
    this.token = null;
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
  logueado() {
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      return true;
    } else {
      this.router.navigate(['/login']);

      return false;
    }
  }
  login(usuario: Usuario, recuerdame: boolean) {
    if (recuerdame) {
      let email: any = usuario.email;
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario).pipe( map( (resp: any) => {
      localStorage.setItem('id', resp.usuario._id);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('usuario', JSON.stringify(resp.usuario));

      return true;
    } ));
  }

  crearUsuario( usuario: Usuario) {

    let url = URL_SERVICIOS + '/usuarios';
    return this.http.post(url, usuario);
  }
}
