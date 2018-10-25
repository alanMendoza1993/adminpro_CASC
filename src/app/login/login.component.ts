import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';

declare function init_plugin();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame = false;
  email = '';
  constructor(
    public router: Router,
    public usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    init_plugin();
    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 0) {
      this.recuerdame = true;
    }
  }

  ingresar(forma: NgForm) {
    let usuario = new Usuario(
      null,
      forma.value.email,
      forma.value.password
    );

    this.usuarioService.login( forma.value , forma.value.recuerdame ).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/dashboard']);
    });
  }

}
