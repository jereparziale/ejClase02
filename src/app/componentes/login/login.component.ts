import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuario: string = '';
  public contrasenia: string = '';
  public mostrarError: boolean = false;
  public usuarioIngresado: Usuario = new Usuario;


  constructor(private router: Router) { }

  registrarUsuarios(usuario: any) {
    const usuariosJSON = localStorage.getItem('usuarios');
    const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    //validar campos
    return true;
  }
  validarUsuarioLocalStorage(usuario: any) {
    // Obtener usuarios existentes del almacenamiento local
    const usuariosJSON = localStorage.getItem('usuarios');
    const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
    const usuarioExistente = usuarios.find((u: any) => u.nombre === usuario.nombre && u.clave === usuario.clave);

    if (usuarioExistente) {
      return true;
    } else {
      return false;
    }
  }

  validarUsuario() {
    if (this.usuario.length<=4 || this.contrasenia.length<=4) {
      this.router.navigateByUrl("error");
      return false; // No se ha ingresado nada
    }
    this.usuarioIngresado.nombre = this.usuario;
    this.usuarioIngresado.clave = this.contrasenia;
    if (this.validarUsuarioLocalStorage(this.usuarioIngresado)) {
      this.router.navigateByUrl("bienvenido");
    } else {
      this.router.navigateByUrl("error");
    }
    return true;
  }

  registrarNuevoUsuario() {
    if (this.usuario.length<=4 || this.contrasenia.length<=4) {
      console.log("vacios");
      this.router.navigateByUrl("error");
      return false; // No se ha ingresado nada
    }
    this.usuarioIngresado.nombre = this.usuario;
    this.usuarioIngresado.clave = this.contrasenia;
    if (this.registrarUsuarios(this.usuarioIngresado)) {
      
      this.router.navigateByUrl("bienvenido");
    }else{
      this.router.navigateByUrl("error");
    }
    return true;
  }

}
