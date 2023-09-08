import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

const routes: Routes = [

  //pathmatch
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta predeterminada
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', component: NotFoundComponent}

    // Agrega cualquier otra ruta que necesites aquí
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
