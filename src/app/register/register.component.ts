import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';
import { Router } from '@angular/router';
import swal from 'sweetalert';
declare function init_plugin();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  forma: FormGroup;
  clikeado: boolean = false;
  constructor(
    public usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
    init_plugin();
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.validandoIgual('password', 'password2')});
  }

  validandoIgual(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        validandoIgual : true
      };
    };
  }
   registrarUsuario() {
   /*  if (this.forma.controls['password2'].dirty) {

    } */


    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );
    if (!this.forma.controls['condiciones'].value) {
      return ;
    }

    this.usuarioService.crearUsuario(usuario)
    .subscribe( resp => {
      console.log(resp);
      this.router.navigate(['/login']);
      swal('Felicidades!', 'Ya esta registrado', 'success');
    });

    this.clikeado = true;
  }

}
