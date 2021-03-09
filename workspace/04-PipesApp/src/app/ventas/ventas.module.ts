import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Prime Ng
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Componentes
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { Vuela } from './pipes/vuela.pipe';

@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    OrdenarPipe,
    MayusculasPipe,
    Vuela
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
