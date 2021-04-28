import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            FormularioComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
